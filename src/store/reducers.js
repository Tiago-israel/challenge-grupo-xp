import { combineReducers } from "redux";
import auth from "./ducks/auth";
import albums from "./ducks/albums";
import player from "./ducks/player";
import lastSearch from "./ducks/last-search";

const reducers = combineReducers({
  auth,
  albums,
  player,
  lastSearch
});

export default reducers;
