// Action Types

export const Types = {
  ALBUM_REQUEST: "albums/ALBUM_REQUEST",
  ALBUM_REQUEST_SUCCESS: "albums/ALBUM_REQUEST_SUCCESS",
  ALBUM_REQUEST_FAILED: "albums/ALBUM_REQUEST_FAILED",
  ALBUM_DETAIL_REQUEST: "albumDetail/ALBUM_DETAIL_REQUEST",
  ALBUM_DETAIL_REQUEST_SUCCESS: "albumDetail/ALBUM_DETAIL_REQUEST_SUCCESS",
  ALBUM_DETAIL_REQUEST_FAILED: "albumDetail/ALBUM_DETAIL_REQUEST_FAILED"
};

const initialState = {
  loading: false,
  albums: [],
  album: {}
};

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ALBUM_REQUEST:
      return { ...initialState, loading: true };
    case Types.ALBUM_REQUEST_SUCCESS:
      return {
        ...initialState,
        loading: false,
        albums: action?.payload?.albums
      };
    case Types.ALBUM_DETAIL_REQUEST:
      return { ...initialState, loading: true };
    case Types.ALBUM_DETAIL_REQUEST_SUCCESS:
      return { ...initialState, album: action.payload, loading: false };
    default:
      return state;
  }
}

//Actions Creator

export function findAlbums(search) {
  return {
    type: Types.ALBUM_REQUEST,
    payload: search
  };
}

export function findAlbumsSuccess(albums) {
  return {
    type: Types.ALBUM_REQUEST_SUCCESS,
    payload: {
      albums
    }
  };
}

export function albumDetail({ id }) {
  return {
    type: Types.ALBUM_DETAIL_REQUEST,
    payload: id
  };
}

export function albumDetailSuccess(album) {
  return {
    type: Types.ALBUM_DETAIL_REQUEST_SUCCESS,
    payload: album
  };
}
