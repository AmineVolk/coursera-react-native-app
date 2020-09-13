import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { dishes } from "./reducer/dishes";
import { comments } from "./reducer/comments";
import { promotions } from "./reducer/promotions";
import { leaders } from "./reducer/leaders";
import { favorites } from "./reducer/favorites";
import { persistStore, persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";
export const ConfigureStore = () => {
  const config = {
    key: "root",
    storage: AsyncStorage,
    debug: true,
  };
  const store = createStore(
    persistCombineReducers(config, {
      dishes,
      comments,
      promotions,
      leaders,
      favorites,
    }),
    applyMiddleware(thunk, logger)
  );
  const persistor = persistStore(store);
  return { persistor, store };
};
