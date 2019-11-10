import { combineReducers } from "redux";
import auth from "./ducks/auth";
import albums from "./ducks/albums";
import player from "./ducks/player";

const reducers = combineReducers({
  auth,
  albums,
  player
});

export default reducers;
