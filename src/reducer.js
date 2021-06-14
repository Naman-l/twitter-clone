import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import TweetReducer from "./stateNew/reducer.js";
import oldReducer from "./state/reducer.js";

export const rootReducer = combineReducers({
  old: oldReducer,
  tweet: TweetReducer,
});
const persistConfig = {
  key: "tweet",
  storage: storage,
  whitelist: ["tweet"],
};

const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer);
export const persistor = persistStore(store);

// const pReducer = persistStore(per)
