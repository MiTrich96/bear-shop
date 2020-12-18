import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import elementsReducer from './elementsReducer';
import cart from './cartReducer';
import filter from './filterReducer'; 

const combinedReducers = {
    wines: elementsReducer,
    cart,
    filter,
    form: formReducer
}

const reducer = combineReducers(combinedReducers);

export default reducer;