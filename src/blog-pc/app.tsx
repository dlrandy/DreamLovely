// import taylorSwift from '@Assets/png/taylor_swift_600x400.png';
// import Test from '@Components/Test/index';
import Routes from '@Routes/index';
import * as React from 'react';
// import InitAsync from '@Containers/InitAsync';
import './app.css';

export default class IndexApp extends React.Component<any, any> {
  constructor(props: any){
    super(props);
  }
  public render() {
    return (
      <div  className="chameleon">
      <div className="poll-admin-page">
        {/*<InitAsync />*/}
        <Routes />
        {/*<img src={taylorSwift} alt="Taylor Swift"/>
    <Test />*/}
      </div>
      </div>
    );
  }
}
