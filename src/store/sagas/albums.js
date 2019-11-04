import { call, put } from "redux-saga/effects";
import httpClient from "../../services/http-client";
import { findAlbumsSuccess } from "../ducks/albums";
const api = httpClient("search?");

export function* findAlbums({ payload: search }) {
  if (search) {
    try {
      const response = yield call(api.get, `q=${search}&type=track,album`);
      const {
        data: { albums }
      } = response;
      const result = albums.items.map(({ images, name, artists }) => ({
        images,
        name,
        artists
      }));
      yield put(findAlbumsSuccess(result));
    } catch (e) {
      debugger;
      console.log(e);
    }
  }
}
