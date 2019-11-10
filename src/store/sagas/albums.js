import { call, put } from "redux-saga/effects";
import httpClient from "../../services/http-client";
import {
  findAlbumsSuccess,
  albumDetailSuccess,
  opeModal
} from "../ducks/albums";
import minutesFormatter from "../../services/minute-formatter";
export function* findAlbums(action) {
  const {
    payload: { search = "", token = "" }
  } = action;
  const api = httpClient("search?");
  if (!token) {
    yield put(opeModal());
  }
  if (search) {
    try {
      const {
        data: { albums }
      } = yield call(
        api.get,
        `q=${search}&type=album,artist,playlist,track,show_audio,episode_audio`,
        token
      );
      const result = albums.items.map(({ images, name, artists, id }) => ({
        id,
        images,
        name,
        artists: artists.map(a => a.name).join(", ")
      }));

      yield put(findAlbumsSuccess(result));
    } catch (e) {
      if (e.request?.status === 401) {
        yield put(opeModal());
      }
    }
  } else {
    yield put(findAlbumsSuccess([]));
  }
}

export function* albumDetails({ payload: { id, token } }) {
  const api = httpClient("albums/");
  const { data } = yield call(api.get, id, token);
  const { images, tracks, artists, name } = data;
  yield put(
    albumDetailSuccess({
      images,
      name,
      tracks: {
        ...tracks,
        items: tracks.items.map(item => ({
          ...item,
          duration: minutesFormatter(item.duration_ms)
        }))
      },
      artists: artists.map(a => a.name).join(", ")
    })
  );
}
