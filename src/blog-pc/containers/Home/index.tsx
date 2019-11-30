import * as React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';

import { requestReposByUser } from '@Actions/Repos';
import { requestAllPolls } from '@Actions/Polls';
import { HomeProps } from '@Containers/Home/types';
import Grid from '@Components/PollGrid';

import {
  Dropdown,
  DropdownItem,
} from '@citi-icg-158830/elemental-chameleon-react';

import {
  statusFormatter,
  statusComparator,
  hiddenFormatter,
  deadlineFormatter,
  checkIfContain,
  getUserzOperations,
} from '@Containers/Home/helper';
type HomeScopeCariable = {
  isCVBusineesTeam: boolean;
};
let HomeComponentScopeVariable: HomeScopeCariable = {
  isCVBusineesTeam: false,
};
const Operations = (props: any): JSX.Element => {
  const operations = getUserzOperations(
    props.data,
    HomeComponentScopeVariable.isCVBusineesTeam
  );

  type Oper = {
    component: React.Component;
    handler: Function;
    text: string;
  };
  const opers = operations
    .map(op => {
      return {
        component: (text: string) => <Link to="/edit">{text}</Link>,
        handler: function(params: any) {
          alert(1);
        },
        text: op,
        value: op,
      };
    })
    .filter(({ text }) => text !== '');
  return (
    <Dropdown constantName label="Actions" name="Actions">
      {operations.map((i, index) => (
        <DropdownItem noControl key={i} name={i} value={i}>
          {i}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

const mapStateToProps = function(state: any) {
  const { assetClass, polls } = state;
  const stateToProps = {
    isCVSaleAdmin: checkIfContain(assetClass.userzOwn, 'cv_survey_admin'),
    isCVBusineesTeam: checkIfContain(assetClass.userzOwn, 'cv_business_team'),
    polls: polls.data,
  };
  HomeComponentScopeVariable.isCVBusineesTeam = stateToProps.isCVBusineesTeam;
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
class Home extends React.Component<RouteComponentProps & HomeProps, any> {
  gridApi: any;
  gridColumnApi: any;

  static getDerivedStateFromProps(props: any, state: any) {
    console.log(props);
    return {
      rowData: props.polls,
    };
  }
  constructor(props: any) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: 'POLL NAME',
          field: 'name',
        },
        {
          headerName: 'ASSET CLASS',
          valueGetter: 'data.team.key',
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
          valueFormatter: deadlineFormatter,
        },
        {
          headerName: 'Operations',
          field: 'operations',
          cellRenderer: 'actions',
        },
      ],
      rowData: [],
      frameworkComponents: {
        actions: Operations,
      },
    };
  }

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
  /**
   * handleSetDefault
   */
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
  }

  public render() {
    const { rowData, columnDefs, frameworkComponents } = this.state;
    const context = { componentParent: this };
    return (
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
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
