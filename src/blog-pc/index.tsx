import 'core-js/stable';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '@Store/index';
import IndexApp from './app';
import 'antd/dist/antd.css'; 
declare let module: any;
declare let window: any;

const store = configureStore();
function render() {
  ReactDOM.render(
    <Provider store={store}>
        <IndexApp />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );
}

if (process.env.NODE_ENV === 'development') {
  render();
  if (module.hot) {
    module.hot.accept("./app", () => {
      const NewApp = require("./app").default;
      ReactDOM.render( <Provider store={store}>
        <NewApp />
    </Provider>, document.getElementById('root'));
      
  });

  }
}

if (process.env.NODE_ENV === 'production') {
  window.CV = window.CV || {};
  process.env.ENTRY_MAIN_FUNC
    ? (window.CV[process.env.ENTRY_MAIN_FUNC!] = render)
    : render();
}
