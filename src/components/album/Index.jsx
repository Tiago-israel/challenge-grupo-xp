import React from "react";
import Container from "./styles";
const Album = ({ album }) => (
  <Container>
    <img src={album.images[0].url} alt="album" />
    <p>{album.name}</p>
    <p>{album.artists[0].name}</p>
  </Container>
);

export default Album;
