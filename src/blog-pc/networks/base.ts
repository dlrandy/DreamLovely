import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
interface RequestParams {
  url: string;
  method?: string;
  headers?: Object;
  body?: Object;
  responseType?: string;
}

const token =
  'C158830|marketbu|4f2d7mIGL-Eka87f9974acfQb894600dekji-Eubedf8017';

const baseAjaxFunc = ({
  url,
  method = 'GET',
  headers,
  body,
  responseType = 'json',
}: RequestParams): Observable<AjaxResponse> => {
  return ajax({
    url,
    method,
    headers: {
      ...headers,
      Pragma: 'no-cache',
    },
    body,
    responseType,
  });
};

export const postJSON = ({
  url,
  headers,
  body,
}: RequestParams): Observable<AjaxResponse> => {
  return baseAjaxFunc({
    url,
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body,
  });
};

export const postForm = ({
  url,
  headers,
  body,
  ...others
}: RequestParams): Observable<AjaxResponse> => {
  // body = typeof body === 'string' ? body : JSON.stringify(body);
  return baseAjaxFunc({
    url,
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    ...others,
    body,
  });
};

export const postFormData = ({
  url,
  headers,
  body,
}: RequestParams): Observable<AjaxResponse> => {
  return baseAjaxFunc({
    url,
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'multipart/form-data' },
    body,
  });
};

export const getJSON = ({
  url,
  headers,
}: RequestParams): Observable<AjaxResponse> => {
  return baseAjaxFunc({ url, headers });
};

export default baseAjaxFunc;
