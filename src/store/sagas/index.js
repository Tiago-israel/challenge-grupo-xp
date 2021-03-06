import { all, takeLatest } from "redux-saga/effects";
import { Types as AlbumTypes } from "../ducks/albums";
import { findAlbums, albumDetails } from "./albums";

export default function* rootSaga() {
  yield all([
    takeLatest(AlbumTypes.ALBUM_REQUEST, findAlbums),
    takeLatest(AlbumTypes.ALBUM_DETAIL_REQUEST, albumDetails)
  ]);
}
