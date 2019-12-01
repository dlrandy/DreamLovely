import baseAjaxFunc, {
  getJSON,
  postForm,
  postFormData,
  postJSON,
} from '@Networks/base';
import { Observable } from 'rxjs';
import { AjaxResponse } from 'rxjs/ajax';

const baseAdminGroupUrl = '/cvms/marketbuzz-survey-service/admingroup';
const baseAssetUrl = '/cvms/marketbuzz-survey-service/asset';
export const getUserGroups = ():Observable<AjaxResponse> => {
  return getJSON({url:baseAdminGroupUrl + '/getGroupsByUser'});
};

export const getAllGroups = ():Observable<AjaxResponse> => {
  return getJSON({url:  baseAdminGroupUrl + '/list'});
};

export const getPortletList = ():Observable<AjaxResponse> => {
  return  getJSON({url: baseAdminGroupUrl + '/portlet/list'});
};

export const getAssetDefaultMap = ():Observable<AjaxResponse> => {
  return  getJSON({url: baseAssetUrl + '/defaultMap'});
};































