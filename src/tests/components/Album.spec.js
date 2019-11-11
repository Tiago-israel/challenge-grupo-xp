import React from "react";
import { shallow } from "enzyme";
import Album from "../../components/album";
import { AlbumName, Artist } from "../../components/album/styles";

describe("Tests Album component", () => {
  it("should display album information", () => {
    const album = {
      name: "Meteora",
      artists: "Linkin Park",
      images: [{ url: "link" }]
    };
    const wrapper = shallow(<Album album={album} />);
    expect(
      wrapper.contains(<img src={album.images[0].url} alt="album" />)
    ).toBeTruthy();
    expect(wrapper.contains(<AlbumName>{album.name}</AlbumName>)).toBeTruthy();
    expect(wrapper.contains(<Artist>{album.artists}</Artist>)).toBeTruthy();
  });
});
