import 'core-js/stable';
import IndexApp from './app';

declare let module : any;
declare let window : any;

function render() {
  IndexApp()
}

if (process.env.NODE_ENV === 'development') {
  render();
  if (module.hot) {
    module
      .hot
      .accept("./app", () => {
        const newApp = require("./app").default;
        newApp()

      });

  }
}

if (process.env.NODE_ENV === 'production') {
  window.CV = window.CV || {};
  process.env.ENTRY_MAIN_FUNC
    ? (window.CV[process.env.ENTRY_MAIN_FUNC !] = render)
    : render();
}
