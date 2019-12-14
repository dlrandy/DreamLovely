import configureStore from '@Store/index';
import 'core-js/stable';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import IndexApp from './app';
declare let module: any;
declare let window: any;

const store = configureStore();
function render() {
  const domNode = document.getElementById('root') as HTMLElement;
   // 启用concurrent mode
  const root = ReactDOM.createRoot(domNode);
  root.render(<Provider store={store}>
    <IndexApp />
</Provider>)

}

if (process.env.NODE_ENV === 'development') {
  render();
  if (module.hot) {
    module.hot.accept("./app", () => {
      const NewApp = require("./app").default;
      const domNode = document.getElementById('root') as HTMLElement;
      const root = ReactDOM.createRoot(domNode);
      root.render(<Provider store={store}>
        <NewApp />
    </Provider>)
  });

  }
}

if (process.env.NODE_ENV === 'production') {
  window.CV = window.CV || {};
  process.env.ENTRY_MAIN_FUNC
    ? (window.CV[process.env.ENTRY_MAIN_FUNC!] = render)
    : render();
}
