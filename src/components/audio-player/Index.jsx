import React from "react";

const onPlay = second => {
  console.log(second);
};

const AudioPlayer = props => {
  const audio = new Audio();
  audio.src;
  return (
    <div>
      <audio onPlay={onPlay} controls>
        <source src={props.source} />
      </audio>
    </div>
  );
};

export default AudioPlayer;
