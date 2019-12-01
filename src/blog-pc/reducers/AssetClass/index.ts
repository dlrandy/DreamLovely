
import AssetClassActionTypes from '@Actions/AssetClass/type';
import { handleActions } from 'redux-actions';
const initialState = {
  userzOwn: [],
  wholeOwn:[],
  defaultMap: {}
};


const assetClassReducer = handleActions(
  {
    [AssetClassActionTypes.REQUESTED_USER_ASSETCLASS]: (state:any) => {
      return { ...state };
    },
    [AssetClassActionTypes.RECEIVED_USER_ASSETCLASS]: (state:any, action) => {
      console.log(action)
      return { ...state, userzOwn: action.payload };
    },
    [AssetClassActionTypes.REQUESTED_ALL_ASSETCLASS]: (state:any) => {
      return { ...state };
    },
    [AssetClassActionTypes.RECEIVED_ALL_ASSETCLASS]: (state:any, action) => {
      console.log(action)
      return { ...state, wholeOwn: action.payload };
    },
    [AssetClassActionTypes.RECEIVED_ASSET_DEFAULT_MAP]: (state:any, action) => {
      console.log(action)
      return { ...state, defaultMap: action.payload };
    },
    [AssetClassActionTypes.REQUESTED_ASSET_DEFAULT_MAP]: (state:any) => {
      
      return { ...state};
    },
  },
  initialState
);
export default assetClassReducer;