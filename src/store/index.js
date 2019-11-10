import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import sagas from "./sagas";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "lastSearch"]
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composer = compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, composeWithDevTools(composer));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
