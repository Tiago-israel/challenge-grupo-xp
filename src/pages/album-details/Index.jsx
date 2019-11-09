import React, { useEffect } from "react";
import * as Actions from "../../store/ducks/albums";
import Album from "../../components/album/Index";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Container, Time, TrackNumber } from "./styles";
import AudioPlayer from "../../components/audio-player/Index";
import Sound, { PlayStatus } from "react-sound";
const AlbumDetail = ({ match, album }) => {
  const { params } = match;
  const { tracks: { items = [] } = {} } = album;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.albumDetail(params));
  }, []);

  return (
    <div>
      <Album album={album} />
      <div>
        {items.map(track => (
          <Container key={track.id}>
            <TrackNumber>{track.track_number}.</TrackNumber>
            <span>{track.name}</span>
            <Time>{track.duration}</Time>
          </Container>
        ))}
        <Sound
          url="https://p.scdn.co/mp3-preview/e3fffa13430292c5df046a768db90a03c61f643a?cid=774b29d4f13844c495f206cafdad9c86"
          playStatus="PLAYING"
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ albums }) => ({
  album: albums.album
});

export default connect(mapStateToProps)(AlbumDetail);
