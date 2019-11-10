import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Container, Progress, Controls, Current } from "./styles";
import PlayIcon from "../../assets/icons/play.svg";
import PauseIcon from "../../assets/icons/pause.svg";
import Sound from "react-sound";
import * as PLayerActions from "../../store/ducks/player";

const AudioPlayer = ({ audio_url, track_name = "", status }) => {
  const dispatch = useDispatch();
  const play = useCallback(() => dispatch(PLayerActions.playAudio()));
  const pause = useCallback(() => dispatch(PLayerActions.pauseAudio()));
  return (
    <Container>
      <Progress>
        <Controls>
          {!!audio_url && status === PLayerActions.PlayStatus.Playing ? (
            <button onClick={pause}>
              <img src={PauseIcon} alt="pause" />
            </button>
          ) : (
            <button onClick={play}>
              <img src={PlayIcon} alt="play" />
            </button>
          )}
        </Controls>
      </Progress>
      <Current>
        <div>
          <span>{track_name}</span>
          {track_name && !audio_url && <span>(música indisponível)</span>}
        </div>
      </Current>
      <Sound url={audio_url || ""} playStatus={status} />
    </Container>
  );
};

export default AudioPlayer;
