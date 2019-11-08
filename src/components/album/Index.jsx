import React from "react";
import Container from "./styles";
const Album = ({ album }) => {
  debugger;
  const { name = "", artists = "", images = [] } = album;
  return (
    <Container>
      <img src={images[0]?.url} alt="album" />
      <p>{name}</p>
      <p>{artists}</p>
    </Container>
  );
};

export default Album;
