import { call, put } from "redux-saga/effects";
import httpClient from "../../services/http-client";
import { findAlbumsSuccess, albumDetailSuccess } from "../ducks/albums";
import minutesFormatter from "../../services/minute-formatter";
export function* findAlbums({ payload: search }) {
  const api = httpClient("search?");
  if (search) {
    try {
      const { data } = yield call(api.get, `q=${search}&type=track,album`);
      const { albums } = data;
      const result = albums.items.map(({ images, name, artists, id }) => ({
        id,
        images,
        name,
        artists: artists.map(a => a.name).join(", ")
      }));

      yield put(findAlbumsSuccess(result));
    } catch (e) {
      if (e.request?.status === 401) {
        //chamar modal
      }
    }
  }
}

export function* albumDetails({ payload: id }) {
  const api = httpClient("albums/");
  const { data } = yield call(api.get, id);
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
