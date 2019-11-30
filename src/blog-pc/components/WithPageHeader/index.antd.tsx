import * as React from 'react';
import { PageHeader, Layout, Icon, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export const withPageHeader = <P extends object>(
  WrappedComonent: React.ComponentType<P>,
  callback?:()=>void
) => {
  return class T extends React.PureComponent<P, any> {
    constructor(props: P) {
      super(props);
    }
    render() {
      const { ...props } = this.props;
      return (
        <div>
          <Layout>
            <Header>
              <Button type="primary" onClick={() => {
                callback && callback();
                history.back();
              }}>
                <Icon type="left" />
                Return To Poll
              </Button>
            </Header>
            <Layout>
              <Sider> </Sider>
              <Content>
                <WrappedComonent {...props} as P />
                {this.props.children}
              </Content>
              <Sider />
            </Layout>
          </Layout>
        </div>
      );
    }
  };
};
// export const withPageHeader = function ttt<P extends object> ( WrappedComonent: React.ComponentType<P>) {
//   return class T extends React.Component<P, any> {
//     constructor(props: P) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <Layout>
//             <Header>
//               <Button type="primary" onClick={() => history.back()}>
//                 <Icon type="left" />
//                 Go back
//               </Button>
//             </Header>
//             <Layout>
//               <Sider> </Sider>
//               <Content>{
//                 this.props.children
//               }</Content>
//               <Sider />
//             </Layout>
//           </Layout>
//         </div>
//       );
//     }
//   };
// };
