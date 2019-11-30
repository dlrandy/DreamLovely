import TagsActionTypes from '@Actions/Tags/type';
import { createAction } from 'redux-actions';
 
export const requestAllTags =createAction(TagsActionTypes.REQUESTED_ALL_TAGS);


export const receiveAllTags = createAction(TagsActionTypes.RECEIVED_ALL_TAGS, (tags:any) => (tags));

export const addANewTagReq = createAction(TagsActionTypes.ADD_NEW_TAG_REQ, (tags:any) => ({names: tags}));

export const addANewTagRes = createAction(TagsActionTypes.ADD_NEW_TAG_RES, (success:boolean, tags:string[] ) => (success? tags: []));


