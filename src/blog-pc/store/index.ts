import rootEpic from '@Epics/index';
import rootReducer from '@Reducers/index';
import { applyMiddleware, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';


const epicMiddleware = createEpicMiddleware();

export default (): Store => {
  const store = createStore(rootReducer(), applyMiddleware(epicMiddleware));
  epicMiddleware.run(rootEpic);
  return store;
};
