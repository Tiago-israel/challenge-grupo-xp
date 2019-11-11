import React, { useEffect } from "react";
import * as Actions from "../../store/ducks/albums";
import * as PLayerActions from "../../store/ducks/player";
import Album from "../../components/album/Index";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Container, Time, TrackNumber, Track, Back } from "./styles";
import Link from "../../components/link";
import AudioPlayer from "../../components/audio-player/Index";
import ModalToken from "../../components/modal-token/Index";

const AlbumDetail = ({
  match,
  album,
  audio_url,
  token,
  track_name,
  status
}) => {
  const { params } = match;
  const { tracks: { items = [] } = {} } = album;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.albumDetail(params, token));
    dispatch(PLayerActions.clearTrack());
  }, []);

  const setAudio = (url, track_name) => {
    return () => {
      dispatch(PLayerActions.loadAudio(url, track_name));
    };
  };

  return (
    <div>
      <Back>
        <Link to="/">
          <span>&#60; Voltar</span>
        </Link>
      </Back>
      <Container>
        <div className="div1">
          <div className="album-cover">
            <Album album={album} />
          </div>
        </div>
        <div>
          {items.map(track => (
            <Track
              onClick={setAudio(track.preview_url, track.name)}
              key={track.id}
            >
              <TrackNumber>{track.track_number}.</TrackNumber>
              <span>{track.name}</span>
              <Time>{track.duration}</Time>
            </Track>
          ))}
        </div>
      </Container>
      <AudioPlayer
        status={status}
        audio_url={audio_url}
        track_name={track_name}
      />
      <ModalToken />
    </div>
  );
};

const mapStateToProps = ({ albums, auth, player }) => ({
  album: albums.album,
  audio_url: player.audio_url,
  track_name: player.track_name,
  status: player.status,
  token: auth.token
});

export default connect(mapStateToProps)(AlbumDetail);
