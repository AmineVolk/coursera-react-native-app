import { ADD_FAVORITE, DELETE_FAVORITE } from "../ActionTypes"
export const postFavorite = (dishId) => (dispatch) => {
    dispatch(addFavorite(dishId));
};


export const addFavorite = (dishId) => ({
    type: ADD_FAVORITE,
    payload: dishId
});

export const deleteFavorite = (dishId) => ({
    type: DELETE_FAVORITE,
    payload: dishId
});