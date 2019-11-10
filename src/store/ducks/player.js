export const Types = {
  PLAY: "player/PLAY",
  PAUSE: "player/PAUSE",
  LOAD: "player/LOAD",
  CLEAR: "player/CLEAR"
};

export const PlayStatus = {
  Playing: "PLAYING",
  Stopped: "STOPPED",
  Paused: "PAUSED"
};

const initialState = {
  audio_url: "",
  track_name: "",
  status: PlayStatus.Playing
};

export default function reducer(state = initialState, { payload = {}, type }) {
  const reducer = {
    [Types.PLAY]: { ...state, status: PlayStatus.Playing },
    [Types.PAUSE]: { ...state, status: PlayStatus.Paused },
    [Types.CLEAR]: { ...state, audio_url: "", track_name: "" },
    [Types.LOAD]: {
      ...state,
      status: PlayStatus.Playing,
      audio_url: payload.audio_url,
      track_name: payload.track_name
    }
  };
  return reducer[type] || state;
}

export function clearTrack() {
  return {
    type: Types.CLEAR
  };
}

export function loadAudio(audio_url, track_name) {
  return {
    type: Types.LOAD,
    payload: {
      audio_url,
      track_name
    }
  };
}

export function playAudio() {
  return {
    type: Types.PLAY
  };
}

export function pauseAudio() {
  return {
    type: Types.PAUSE
  };
}
