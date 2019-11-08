import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../components/search-input";
import { Section, Link } from "./styles";
import Album from "../../components/album/Index";
import * as Actions from "../../store/ducks/albums";

const Home = () => {
  const dispatch = useDispatch();
  const { albums } = useSelector(state => state.albums);

  const searchAlbums = useCallback(
    event => dispatch(Actions.findAlbums(event.target.value)),
    [dispatch]
  );
  return (
    <div>
      <SearchInput
        label="Busque por artistas, álbuns ou músicas"
        placeholder="Comece a escrever..."
        onSearch={searchAlbums}
      />
      <Section>
        {albums.map(album => (
          <Link key={album.id} to={`/album/${album.id}`}>
            <Album album={album} />
          </Link>
        ))}
      </Section>
    </div>
  );
};

export default Home;
