import {ADD_TO_CART, REMOVE_FROM_CART} from './../constans/elementsConstantAction';

export const addToCart = item => ({
    type: ADD_TO_CART,
    payload: item,
});
  
export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    payload: id,
});
  