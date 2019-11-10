import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../components/search-input";
import { Section, TextResult } from "./styles";
import Link from "../../components/link";
import Album from "../../components/album/Index";
import * as AlbumsActions from "../../store/ducks/albums";
import * as AuthActions from "../../store/ducks/auth";
import Modal from "../../components/modal/Index";

const Home = props => {
  const [token, setToken] = useState("");
  const album = getAlbumByUrl(props);
  const dispatch = useDispatch();
  const { albums, search, showModal } = useSelector(state => state.albums);
  const { token: auth } = useSelector(state => state.auth);

  const searchAlbums = useCallback(
    event => dispatch(AlbumsActions.findAlbums(event.target.value, auth)),
    [dispatch, auth]
  );

  const sendToken = useCallback(() => {
    dispatch(AuthActions.setToken(token));
    dispatch(AlbumsActions.closeModal());
  }, [dispatch, token]);

  useEffect(() => {
    if (album) {
      dispatch(AlbumsActions.findAlbums(album, auth));
    }
  }, [name, auth]);

  return (
    <div>
      <SearchInput
        label="Busque por artistas, álbuns ou músicas"
        placeholder="Comece a escrever..."
        onSearch={searchAlbums}
      />
      {albums.length > 0 && (
        <TextResult>Resultados encontrados para "{search}"</TextResult>
      )}

      {albums.length === 0 && (
        <TextResult>Nenhum resultado encontrado para "{search}"</TextResult>
      )}
      <Section>
        {albums.map(album => (
          <Link key={album.id} to={`/album/${album.id}`}>
            <Album album={album} />
          </Link>
        ))}
      </Section>
      <Modal enable={showModal}>
        <span>&times;</span>
        <label>Sessão expirada!</label>
        <br />
        <input
          onKeyUp={e => setToken(e.target.value)}
          placeholder="por favor insira o token"
        />
        <button onClick={sendToken}>Enviar</button>
      </Modal>
    </div>
  );
};

function getAlbumByUrl({ match: { params } }) {
  const { name: album } = params;
  return album;
}

export default Home;
