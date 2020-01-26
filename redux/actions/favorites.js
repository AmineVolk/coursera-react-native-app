import { ADD_FAVORITE } from "../ActionTypes"
export const postFavorite = (dishId) => (dispatch) => {
    setTimeout(() => {
        dispatch(addFavorite(dishId));
    }, 2000);
};


export const addFavorite = (dishId) => ({
    type: ADD_FAVORITE,
    payload: dishId
});