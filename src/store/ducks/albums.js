// Action Types

export const Types = {
  ALBUM_REQUEST: "albums/ALBUM_REQUEST",
  ALBUM_REQUEST_SUCCESS: "albums/ALBUM_REQUEST_SUCCESS",
  ALBUM_REQUEST_FAILED: "albums/ALBUM_REQUEST_FAILED"
};

const initialState = {
  loading: false,
  albums: []
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
    default:
      return state;
  }
}

//Actions Creator

// export function findAlbums(search) {
//   debugger;
//   return {
//     type: Types.ALBUM_REQUEST,
//     payload: "y"
//   };
// }

export function findAlbumsSuccess(albums) {
  return {
    type: Types.ALBUM_REQUEST_SUCCESS,
    payload: {
      albums
    }
  };
}
