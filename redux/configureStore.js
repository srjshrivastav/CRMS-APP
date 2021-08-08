import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {user} from './user'
import { persistStore, persistCombineReducers } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage'

const config = {
  key: "root",
  storage:AsyncStorage,
  debug: true,
};

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
        user
    }),
    applyMiddleware(logger)
  );
  const persistor = persistStore(store);
  return { persistor, store };
};