// Action Types

export const Types = {
  SET_TOKEN: "auth/SET_TOKEN"
};

const initialState = {
  token: ""
};

export default function reducer(state = initialState, action) {
  const reducer = {
    [Types.SET_TOKEN]: { ...state, token: action.payload }
  };
  return reducer[action.type] || state;
}

export function setToken(token) {
  return {
    type: Types.SET_TOKEN,
    payload: token
  };
}
