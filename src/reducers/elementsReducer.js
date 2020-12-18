import {FETCH_WINE_SUCCESS,SET_CURRENT_PAGE} from './../constans/elementsConstantAction';

const initialState = {
    items: [],
    currentPage: 1,
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
    default:
      return state;
  }
}