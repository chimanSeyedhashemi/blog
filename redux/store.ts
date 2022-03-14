import {
  combineReducers,
  createStore,
  ReducersMapObject,
  AnyAction,
  Reducer,
} from "redux";
import { reducer as ThemeReducer } from "./reducer/theme";

import { persistStore, persistReducer } from "redux-persist";
import { ITheme } from "../utils/theme";
import { IReduxState } from "./model.store";
import storage from "../storage";

const reducers: ReducersMapObject<IReduxState, AnyAction> = {
  theme: ThemeReducer as Reducer<ITheme , AnyAction>,
 
};

export const main_reducer = combineReducers(reducers);

const persistConfig = {
  key: "root",
  storage,

};

const persistedReducer = persistReducer(persistConfig, main_reducer);

export const Store = createStore(persistedReducer);
export const persistor = persistStore(Store);
