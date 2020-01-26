import { ADD_FAVORITE } from '../ActionTypes';

export const favorites = (state = [], action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            if (state.some(el => el === action.payload))
                return state;
            else
                return state.concat(action.payload);

        default:
            return state;
    }
};