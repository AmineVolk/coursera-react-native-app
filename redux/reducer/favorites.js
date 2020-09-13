import { ADD_FAVORITE, DELETE_FAVORITE } from "../ActionTypes";

export const favorites = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      if (state.some((el) => el === action.payload)) return state;
      else return state.concat(action.payload);
    case DELETE_FAVORITE:
      const newState = state.filter((favorite) => favorite != action.payload);
      return newState;
    default:
      return state;
  }
};
