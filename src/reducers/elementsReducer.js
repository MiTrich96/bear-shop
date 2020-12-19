import {FETCH_WINE_SUCCESS,SET_CURRENT_PAGE,CHANGE_COUNT_PAGES} from './../constans/elementsConstantAction';

const initialState = {
    items: [],
    currentPage: 1,
    countPages: 4,
    perPage:6
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WINE_SUCCESS: 
      return {
        ...state,
        items: action.payload
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case CHANGE_COUNT_PAGES:
      return {
        ...state,
        countPages: action.payload
      }
    default:
      return state;
  }
}