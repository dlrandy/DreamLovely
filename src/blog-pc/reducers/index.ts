import {combineReducers} from 'redux';
const initialState = {
  items: [
    'hello worlddf'
  ],
}
const itemsReducer  = function (state=initialState, action: any) {
  switch (action.type) {
    // case RECEIVED_USER_REPOS:

    // return {...state, repos: action.payload}

    default:
    return state;
  }
}

export default () => combineReducers({
  items: itemsReducer,
});
