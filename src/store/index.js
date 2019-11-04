import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import albums from "./ducks/albums";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composer = compose(applyMiddleware(...middlewares));

const store = createStore(
  combineReducers({ albums }),
  composeWithDevTools(composer)
);

sagaMiddleware.run(sagas);

export default store;
