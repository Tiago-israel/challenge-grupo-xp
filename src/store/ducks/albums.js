// Action Types

export const Types = {
  ALBUM_REQUEST: "albums/ALBUM_REQUEST",
  ALBUM_REQUEST_SUCCESS: "albums/ALBUM_REQUEST_SUCCESS",
  ALBUM_REQUEST_FAILED: "albums/ALBUM_REQUEST_FAILED",
  ALBUM_DETAIL_REQUEST: "albumDetail/ALBUM_DETAIL_REQUEST",
  ALBUM_DETAIL_REQUEST_SUCCESS: "albumDetail/ALBUM_DETAIL_REQUEST_SUCCESS",
  ALBUM_DETAIL_REQUEST_FAILED: "albumDetail/ALBUM_DETAIL_REQUEST_FAILED",
  MODAL_OPEN: "modal/MODAL_OPEN",
  MODAL_CLOSE: "modal/MODAL_CLOSE"
};

const initialState = {
  loading: false,
  search: "",
  albums: [],
  album: {},
  showModal: false
};

// Reducer
export default function reducer(state = initialState, action) {
  const reducer = {
    [Types.ALBUM_REQUEST]: {
      ...state,
      loading: true,
      search: action.payload?.search
    },
    [Types.ALBUM_REQUEST_SUCCESS]: {
      ...state,
      loading: false,
      copiaAlbums: action?.payload?.albums,
      albums: action?.payload?.albums
    },
    [Types.ALBUM_DETAIL_REQUEST]: { ...state, loading: true },
    [Types.ALBUM_DETAIL_REQUEST_SUCCESS]: {
      ...state,
      album: action.payload,
      loading: false
    },
    [Types.MODAL_OPEN]: { ...state, showModal: action.payload },
    [Types.MODAL_CLOSE]: { ...state, showModal: action.payload }
  };
  return reducer[action.type] || state;
}

//Actions Creator

export function findAlbums(search, token) {
  return {
    type: Types.ALBUM_REQUEST,
    payload: {
      search,
      token
    }
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

export function albumDetail({ id }, token) {
  return {
    type: Types.ALBUM_DETAIL_REQUEST,
    payload: {
      id,
      token
    }
  };
}

export function albumDetailSuccess(album) {
  return {
    type: Types.ALBUM_DETAIL_REQUEST_SUCCESS,
    payload: album
  };
}

export function opeModal() {
  return {
    type: Types.MODAL_OPEN,
    payload: true
  };
}

export function closeModal() {
  return {
    type: Types.MODAL_CLOSE,
    payload: false
  };
}
