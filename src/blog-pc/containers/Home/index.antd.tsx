import * as React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter,  } from 'react-router-dom';
import { Dispatch } from 'redux';

import { requestReposByUser } from '@Actions/Repos';
import {
  requestAllPolls,
  requestHidePoll,
  requestClosePoll,
  requestActivePoll,
  requestPublishPollToPage,
} from '@Actions/Polls';

import { HomeProps } from '@Containers/Home/types';
import Grid from '@Components/PollGrid';
import ActionGroups from '@Components/ActionsGroup/index.antd';
import AssetClassSelect from '@Components/AssetClass/index.antd';
import ModalForOPerations from '@Components/Modal/index.antd';
import { Row, Col, message } from 'antd';
import SearchInput from '@Components/Search/index.antd';
import { Set } from 'immutable';
import {
  statusFormatter,
  statusComparator,
  hiddenFormatter,
  formatTime,
  checkIfContain,
  getUserzOperations,
 
} from '@Containers/Home/helper';
import { ClickParam } from 'antd/lib/menu';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { YN } from '@Epics/Polls/type';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Menu, Icon, Checkbox } from 'antd';
import '@Containers/Home/style.css';
import TextArea from '@Components/TextArea';

import { b64EncodeUnicode } from '@Utils/index';
import { getEmailContent } from '@Networks/polls';

interface Portlet {
  name: string;
  id: number;
}
type HomeScopeCariable<T extends Portlet> = {
  isCVBusineesTeam: boolean;
  portlets?: [T];
};
let HomeComponentScopeVariable: HomeScopeCariable<Portlet> = {
  isCVBusineesTeam: false,
  portlets: undefined,
};

const SubMenu = Menu.SubMenu;
export const FormatName = (props: any):JSX.Element => {
  function handleAnchorClick1(e: MouseEvent, data: any) {
    props.context.componentParent.handleAnchorClick(e, data);
  }
  const {data={}} = props;
  return  <a className="by-link-color-0" onClick={(e) => handleAnchorClick1(e, data)}>{data.name}</a>
};

const Operations = (props: any): JSX.Element => {
  function handleMenuClick1(e: ClickParam, data: any) {
    message.info('Click on menu item.');
    console.log('click', e, data, props);
    props.context.componentParent.handleOperationsClick(e, data);
  }
  function handlePublishClick1(e: ClickParam, data: any) {
    props.context.componentParent.handlePublishClick(e, data);
  }
  const {
    handleMenuClick = handleMenuClick1,
    handlePublishClick = handlePublishClick1,
  } = props;
  const operations = getUserzOperations(
    props.data,
    HomeComponentScopeVariable.isCVBusineesTeam
  );
  const allPortlets = HomeComponentScopeVariable.portlets;
  const actions = operations.filter((text: string) => text !== '');
  const activePortlets = props.data.activeProtletIds;
  const items = actions.map((ac: string) => {
    const comp =
      ac === 'Publish to Page' ? (
        <SubMenu
          key="subMenu"
          title={
            <span>
              <Icon type="tool" />
              <span> Publish to Page</span>
            </span>
          }
        >
          {allPortlets && (
            <Menu.Item>
              {' '}
              <Checkbox.Group
                style={{ width: '100%' }}
                onChange={(v: any) => handlePublishClick(v, props.data)}
                defaultValue={activePortlets}
              >
                {allPortlets.map(({ id, name }: any) => (
                  <Row key={id}>
                    <Checkbox value={id}>{name}</Checkbox>
                  </Row>
                ))}
              </Checkbox.Group>
            </Menu.Item>
          )}
        </SubMenu>
      ) : (
        <Menu.Item key={ac}>
          <Icon type="tool" />
          {ac}
        </Menu.Item>
      );
    return comp;
  });
  return (
    <ActionGroups data={props.data} handleMenuClick={handleMenuClick}>
      {items}
    </ActionGroups>
  );
};

const mapStateToProps = function(state: any) {
  const { assetClass, polls, portlets } = state;
  const stateToProps = {
    isCVSaleAdmin: checkIfContain(assetClass.userzOwn, 'cv_survey_admin'),
    isCVBusineesTeam: checkIfContain(assetClass.userzOwn, 'cv_business_team'),
    polls: polls.data,
    userzOwnAssets: assetClass.userzOwn,
    wholeAssetClass: assetClass.wholeOwn,
    wholePortlets: portlets.wholeOwn,
  };
  HomeComponentScopeVariable.isCVBusineesTeam = stateToProps.isCVBusineesTeam;
  HomeComponentScopeVariable.portlets = stateToProps.wholePortlets.map(
    ({ name, id }: any) => ({ id, name: name.replace(/ poll/gi, '') })
  );
  return stateToProps;
};

const mapDispatchToProps = function(dispatch: Dispatch): HomeProps {
  return {
    print: () => {
      dispatch(requestReposByUser('dlrandy'));
    },
    getPollDatas: () => {
      dispatch(requestAllPolls());
    },
    setPollHide: (id: number, operation: any) => {
      dispatch(requestHidePoll(id, YN[operation]));
    },
    setPollClose: (id: number, status: string) => {
      dispatch(requestClosePoll(id, status));
    },
    setPollActive: (id: number, status: string) => {
      dispatch(requestActivePoll(id, status));
    },
    publishPollToPage: (id: number, portletId: string, checked: boolean) => {
      dispatch(requestPublishPollToPage(id, portletId, checked));
    },
  };
};
function Test(props: any) {
  console.log(props);
  return (
    <div
      onClick={() => {
        props.context.componentParent.handleSetDefault('hhda');
      }}
    >
      fucking {props.valueFormatted} componnent
    </div>
  );
}
class Home extends React.Component<any, any> {
  gridApi: any;
  gridColumnApi: any;
  searchTag$!: Subject<any>;
  modalRef: React.RefObject<HTMLTextAreaElement>;

  static getDerivedStateFromProps(props: any, state: any) {
    console.log(props);
    return {
      rowData: props.polls,
    };
  }
  constructor(props: any) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      showModal: '',
      modalPoll: null,
      tag: '',
      filter: 'CV_Survey_Admin',
      columnDefs: [
        {
          headerName: 'POLL NAME',
          field: 'name',
          cellRenderer: 'formatName',
        },
        {
          headerName: 'ASSET CLASS',
          valueGetter: 'data.team.text',
        },
        {
          headerName: 'SUBMITTER',
          field: 'createName',
        },
        {
          headerName: 'STATUS',
          field: 'status',
          comparator: statusComparator,
          valueFormatter: statusFormatter,
        },
        {
          headerName: 'HIDDEN',
          field: 'hidden',
          valueFormatter: hiddenFormatter,
        },
        {
          headerName: 'DEADLINE',
          field: 'deadline',
          valueFormatter: formatTime,
        },
        {
          headerName: 'OPERATIONS',
          field: 'operations',
          cellRenderer: 'actions',
          width: 260,
        },
      ],
      rowData: [],
      frameworkComponents: {
        actions: Operations,
        formatName: FormatName
      },
    };
  }
  handlePublishClick = (value: string[], data: any) => {
    const { publishPollToPage } = this.props;
    const { activeProtletIds } = data;
    debugger;
    const checked = activeProtletIds.length > value.length ? false : true;
    let portlets = checked
      ? Set(value).subtract(activeProtletIds)
      : Set(activeProtletIds).subtract(value);
    publishPollToPage(data.id, portlets.join(), checked);
  };
  handleAnchorClick= (e: ClickParam, data: any) => {
    const { history } = this.props;
    history.push('/view', {params: data})
  }
  handleOperationsClick = (e: ClickParam, data: any) => {
    const { history, setPollHide, setPollClose, setPollActive } = this.props;
    const actions = [
      'SetDefault',
      'Edit',
      'Hide',
      'Unhide',
      'Close',
      'EmailContent',
      'ShowResult',
      'View',
      'Direct Link',
      'Publish to Page',
      'Reports',
      'Save',
      'Publish',
    ];
    const { id, hidden, status } = data;
    switch (e.key) {
      case 'Edit':
        history.push('/edit', { params: data });
        break;
      case 'Hide':
      case 'Unhide':
        setPollHide(id, hidden);
        break;
      case 'Close':
        setPollClose(id, status);
        break;
      case 'DirectLink':
      case 'EmailContent':
        this.setState((state: any) => ({
          ...state,
          showModal: e.key,
          modalPoll: data,
        }));
        break;
      case 'View':
        history.push('/view', { params: data });
        break;
      case 'Publish':
        setPollActive(id, status);
        break;
      case 'ShowResult':
        history.push('/showResult', { params: data });
        break;
      case 'Reports':
        history.push('/report', { params: data });
        break;
      default:
    }
  };

  onGridReady = (params: any) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };

  onGridSizeChanged = (params: any) => {
    var gridWidth = (document.querySelector('.ag-container') as HTMLDivElement)!
      .offsetWidth;
    var columnsToShow = [];
    var columnsToHide = [];
    var totalColsWidth = 0;
    var allColumns = params.columnApi.getAllColumns();
    for (var i = 0; i < allColumns.length; i++) {
      let column = allColumns[i];
      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > gridWidth) {
        columnsToHide.push(column.colId);
      } else {
        columnsToShow.push(column.colId);
      }
    }
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    params.api.sizeColumnsToFit();
  };

  public handleSetDefault = (cell: any) => {
    console.log(cell);
    alert('set successfully from parent.');
  };
  public handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.print();
  };
  componentDidMount() {
    const { getPollDatas } = this.props;
    getPollDatas();
    const searchSubject$ = new Subject<string>();
    searchSubject$.pipe(debounceTime(500)).subscribe((tag: string) => {
      this.setState((state: any) => {
        return {
          ...state,
          tag,
        };
      });
    });
    this.searchTag$ = searchSubject$;
  }

  componentWillUnmount() {
    this.searchTag$.unsubscribe();
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.searchTag$.next(e.target.value);
  };

  handleOkClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(this.modalRef);
    this.modalRef!.current!.select();
    document.execCommand('copy');
    this.setState({
      showModal: '',
    });
    message.success('Copy successfully, you can paste the content.', 5);
  };

  handleCancelClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      showModal: '',
    });
  };

  handleChange = (value: any) => {
    console.log(`selected ${value}`);
    this.setState((state: any) => {
      return { ...state, filter: value, tag: '' };
    });
  };
  public render() {
    let {
      rowData,
      columnDefs,
      frameworkComponents,
      filter,
      tag,
      showModal,
      modalPoll,
    } = this.state;
    const context = { componentParent: this };
    const {
      userzOwnAssets = [],
      wholeAssetClass = [],
      isCVSaleAdmin,
    } = this.props;
    const finalAssets = (isCVSaleAdmin
      ? wholeAssetClass
      : userzOwnAssets
    ).filter(({ value }: any) => value.toLowerCase() !== 'cv_business_team');
    const defaultVal = isCVSaleAdmin
      ? 'CV_Survey_Admin'
      : finalAssets[0]
      ? finalAssets[0].value
      : '';
    console.log(defaultVal);
    rowData =
      filter === 'CV_Survey_Admin'
        ? rowData
        : rowData.filter(({ team }: any) => team.value === filter);
    console.log(rowData);
    tag = tag.trim().toLowerCase();
    rowData =
      tag === ''
        ? rowData
        : rowData.filter((rd: any) => {
            return ~rd.tags
              .join()
              .toLowerCase()
              .indexOf(tag);
          });

    let ModalContent: ForwardRefExoticComponent<
      Pick<any, string | number | symbol> & RefAttributes<{}>
    > = React.forwardRef((props, ref) => <span />);
    if (showModal === 'EmailContent') {
      ModalContent = React.forwardRef(
        (props: any, ref: any): JSX.Element => (
          <TextArea
            forwardedRef={ref}
            {...props}
            value={(id: number) => {
              return getEmailContent(id);
            }}
          />
        )
      );
    } else if (showModal === 'DirectLink') {
      ModalContent = React.forwardRef(
        (props: any, ref: any): JSX.Element => (
          <TextArea
            forwardedRef={ref}
            {...props}
            value={
              self.location.origin +
              '/CompositePageService/portlet/popup/survey_layout_responsive?id=' +
              b64EncodeUnicode(props.modalData.id)
            }
          />
        )
      );
    }

    return (
      <div className="home-container">
        {showModal !== '' && (
          <ModalForOPerations
            handleOkClick={this.handleOkClick}
            handleCancelClick={this.handleCancelClick}
          >
            {' '}
            <ModalContent ref={this.modalRef} modalData={modalPoll} />
          </ModalForOPerations>
        )}
        <Row align={'middle'} justify={'space-around'}>
          <Col span={18}>
            <h3 className="by-text-color-0">Poll List</h3>
          </Col>
          <Col span={6}>
            <Row align={'middle'}>
              <Col span={12}>
                <div className="line-height-1_34 ">
                  <Link type="primary" to="/create" className="by-link-color-0">
                    Create New Poll
                  </Link>
                </div>
              </Col>
              <Col span={12}>
                <div className="line-height-1_34 ">
                  <Link
                    type="primary"
                    to="/statistics"
                    className="by-link-color-0"
                  >
                    Reports
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={24}>Asset Class</Col>
        </Row>
        <Row>
          <Col span={5}>
            <div>
              {defaultVal !== '' && (
                <AssetClassSelect
                  defaultVal={defaultVal}
                  options={finalAssets}
                  handleChange={this.handleChange}
                  style={{ width: 180 }}
                />
              )}
            </div>
          </Col>

          <Col span={4}>
            <div>
              <SearchInput onChange={this.handleSearchChange} />
            </div>
          </Col>
          <Col span={15} />
        </Row>
        <div className="ag-container">
          <Grid
            enableFilter
            enableSorting
            onGridSizeChanged={this.onGridSizeChanged}
            onGridReady={this.onGridReady}
            context={context}
            rowData={rowData}
            frameworkComponents={frameworkComponents}
            columnDefs={columnDefs}
          />
          <Link to="/edit"> Edit </Link>
          <Link to="/poll/edit"> poll edit </Link>
          <Link to="/poll/new"> create new poll </Link>
          <button onClick={this.handleOnClick}>get repos</button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
