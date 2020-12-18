import {SET_FILTER, SET_QUERY} from './../constans/elementsConstantAction';

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: filter,
});
  
export const setSearchQuery = value => ({
    type: SET_QUERY,
    payload: value,
});
  