import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  color: #fff;
  word-break: break-all;
  img {
    max-width: 100%;
    display: block;
  }

  &:hover {
    background-color: #000000;
    opacity: 0.5;
  }
`;

export const AlbumName = styled.p`
  margin-top: 10px;
`;

export const Artist = styled.p`
  margin-top: 5px;
  color: #999999;
`;

export default Container;
