import { call, put } from "redux-saga/effects";
import httpClient from "../../services/http-client";
import {
  findAlbumsSuccess,
  albumDetailSuccess,
  opeModal
} from "../ducks/albums";
import * as LastSearchActions from "../ducks/last-search";
import minutesFormatter from "../../services/minute-formatter";

export function* findAlbums(action) {
  const {
    payload: { search = "", token = "" }
  } = action;
  const api = httpClient("search?");
  if (!token) {
    yield put(opeModal());
  }
  if (search.trim()) {
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
  try {
    const { data } = yield call(api.get, id, token);
    const { images, tracks, artists, name, id: idAlbum } = data;
    yield put(
      LastSearchActions.saveAlbum({ images, tracks, name, id: idAlbum })
    );
    yield put(
      albumDetailSuccess({
        id: idAlbum,
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
  } catch (e) {
    if (e.request?.status === 401) {
      yield put(opeModal());
    }
  }
}
