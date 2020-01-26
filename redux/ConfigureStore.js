import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { dishes } from './reducer/dishes';
import { comments } from './reducer/comments';
import { promotions } from './reducer/promotions';
import { leaders } from './reducer/leaders';
import { favorites } from './reducer/favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes,
            comments,
            promotions,
            leaders,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}