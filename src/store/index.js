import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import albums from "./ducks/albums";
import auth from "./ducks/auth";
import player from "./ducks/player";
import sagas from "./sagas";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composer = compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ albums, auth, player })
);
const store = createStore(persistedReducer, composeWithDevTools(composer));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
