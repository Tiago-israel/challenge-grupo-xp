import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "components/search-input";
import { Section, TextResult } from "./styles";
import Link from "components/link";
import Album from "components/album";
import * as AlbumsActions from "store/ducks/albums";
import ModalToken from "components/modal-token/Index";

const Home = props => {
  document.title = "home";

  const album = getAlbumByUrl(props);
  const dispatch = useDispatch();

  const { token: auth } = useSelector(state => state.auth);
  const { albums, search } = useSelector(state => state.albums);
  const { albums: lastSearchAlbums } = useSelector(state => state.lastSearch);

  const displayAlbums = handleShowAlbums(albums, lastSearchAlbums, search);
  const searchAlbums = useCallback(
    value => dispatch(AlbumsActions.findAlbums(value.trim(), auth)),
    [dispatch, auth]
  );

  useEffect(() => {
    if (album) {
      dispatch(AlbumsActions.findAlbums(album, auth));
    }
  }, [album, auth]);

  return (
    <div>
      <SearchInput
        label="Busque por artistas, álbuns ou músicas"
        placeholder="Comece a escrever..."
        onSearch={searchAlbums}
      />
      {search && displayAlbums.length === 0 && (
        <TextResult>Nenhum resultado encontrado para "{search}"</TextResult>
      )}
      {search && displayAlbums.length > 0 ? (
        <TextResult>Resultados encontrados para "{search}"</TextResult>
      ) : (
        <TextResult>Albums buscados recentemente</TextResult>
      )}
      <Section>
        {displayAlbums.map(album => (
          <Link key={album.id} to={`/album/${album.id}`}>
            <Album album={album} />
          </Link>
        ))}
      </Section>
      <ModalToken />
    </div>
  );
};

function getAlbumByUrl({ match: { params } }) {
  const { name: album } = params;
  return album;
}

function handleShowAlbums(albums = [], lastSearchAlbums = [], search = "") {
  if (!search && lastSearchAlbums.length > 0) {
    return lastSearchAlbums;
  } else if (albums.length > 0) {
    return albums;
  } else {
    return [];
  }
}

export default Home;
