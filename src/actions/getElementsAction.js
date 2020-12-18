import {
    FETCH_WINE_SUCCESS,
    SET_CURRENT_PAGE
} from './../constans/elementsConstantAction';

export function winesFetchDataSuccess(wines) {
    return {
        type: FETCH_WINE_SUCCESS,
        payload: wines
    }
}

export function winesFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(wines => dispatch(winesFetchDataSuccess(wines)))
            .catch(()=>{});
    }
}

export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page})