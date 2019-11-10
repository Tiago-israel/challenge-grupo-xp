export const Types = {
  ALBUMS: "lastSearch/ALBUMS",
  SEARCH: "lastSearch/SEARCH"
};

const initialState = {
  albums: [],
  search: ""
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case Types.ALBUMS:
      const { albums = [] } = state;
      if (!albums.some(album => album.id === payload.id)) {
        return { ...state, albums: [...albums, payload] };
      }
      return { ...state };
    case Types.SEARCH:
      return { ...state, search: payload };
    default:
      return state;
  }
}

export function saveAlbum(album) {
  return {
    type: Types.ALBUMS,
    payload: album
  };
}

export function saveSearch(search = "") {
  return {
    type: Types.SEARCH,
    payload: search
  };
}
