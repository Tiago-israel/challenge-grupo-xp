import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../components/search-input";
import AlbumList from "./styles";
import Album from "../../components/album/Index";
import { Types as AlbumsTypes } from "../../store/ducks/albums";

const Home = () => {
  const dispatch = useDispatch();
  const { albums } = useSelector(state => state.albums);

  const searchAlbums = useCallback(
    event =>
      dispatch({
        type: AlbumsTypes.ALBUM_REQUEST,
        payload: event.target.value
      }),
    [dispatch]
  );

  return (
    <div>
      <SearchInput
        label="Busque por artistas, álbuns ou músicas"
        placeholder="Comece a escrever..."
        onSearch={searchAlbums}
      />
      <AlbumList>
        {albums.map((album, key) => (
          <Album key={key} album={album} />
        ))}
      </AlbumList>
    </div>
  );
};

export default Home;
