import React from "react";
import { Container, AlbumName, Artist } from "./styles";
const Album = ({ album }) => {
  const { name = "", artists = "", images = [] } = album;
  return (
    <Container>
      <img src={images[0]?.url} alt="album" />
      <AlbumName>{name}</AlbumName>
      <Artist>{artists}</Artist>
    </Container>
  );
};

export default Album;
