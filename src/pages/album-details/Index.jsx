import React, { useEffect } from "react";
import * as Actions from "../../store/ducks/albums";
import Album from "../../components/album/Index";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Container, Time, TrackNumber } from "./styles";
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
        <audio controls></audio>
      </div>
    </div>
  );
};

const mapStateToProps = ({ albums }) => ({
  album: albums.album
});

export default connect(mapStateToProps)(AlbumDetail);
