import { receiveUserz_AssetClass,receiveAll_AssetClass, receiveAsset_DefaultMap } from '@Actions/AssetClass';
import AssetClassActionTypes from '@Actions/AssetClass/type';
import { ofType } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';
import { getUserGroups, getAllGroups, getAssetDefaultMap } from '@Networks/assetClass';
import { from } from 'rxjs';
export const fetchUserzAssetClass = (action$: any):any => {
  return action$.pipe(
    ofType(AssetClassActionTypes.REQUESTED_USER_ASSETCLASS),
    switchMap(() =>
      from(getUserGroups()).pipe(
        map(({response}) => {
          return receiveUserz_AssetClass(response);
        })
      )
    )
  );
};

export const fetchAllAssetClass = (action$: any):any => {
  return action$.pipe(
    ofType(AssetClassActionTypes.REQUESTED_ALL_ASSETCLASS),
    switchMap(() =>
      from(getAllGroups()).pipe(
        map(({response}) => {
          return receiveAll_AssetClass(response);
        })
      )
    )
  );
};

export const fetchAllAssetDefaultMap = (action$: any):any => {
  return action$.pipe(
    ofType(AssetClassActionTypes.REQUESTED_ASSET_DEFAULT_MAP),
    switchMap(() =>
      from(getAssetDefaultMap()).pipe(
        map(({response}) => {
          return receiveAsset_DefaultMap(response);
        })
      )
    )
  );
};

export default fetchUserzAssetClass;