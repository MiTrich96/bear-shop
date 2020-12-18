import {SET_QUERY, SET_FILTER} from './../constans/elementsConstantAction';

const initialState = {
    searchQuery: '',
    filterBy: 'All',
  };
  
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload,
            };
        default:
            return state;
    }
};
  