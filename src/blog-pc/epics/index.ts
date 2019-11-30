import poll_epics from '@Epics/Polls';
import fetchAllRepos from '@Epics/Repos/fetch_all';
import { fetchUserzAssetClass, fetchAllAssetClass, fetchAllAssetDefaultMap } from '@Epics/AssetClass';
import { fetchAllPortlets } from '@Epics/Portlets';
import TagEpics from '@Epics/Tags';
import { combineEpics } from 'redux-observable';
export default combineEpics(
 ...poll_epics,
  fetchAllRepos,
  fetchUserzAssetClass,
  fetchAllAssetClass,
  fetchAllAssetDefaultMap,
  fetchAllPortlets,
  ...TagEpics,
   
);



