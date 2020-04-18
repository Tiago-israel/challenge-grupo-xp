import React from "react";
import { shallow } from "enzyme";
import SearchInput from "../../components/search-input";
import { Input, Label } from "../../components/search-input/styles";

describe("Tests Search Input", () => {
  it("should render input", () => {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper.find(<Input />)).toBeTruthy();
  });

  it("should render label", () => {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper.find(<Label />)).toBeTruthy();
  });

  it("should display text label", () => {
    const text = test;
    const wrapper = shallow(<SearchInput label={text} />);
    expect(wrapper.contains(<Label>{text}</Label>)).toBeTruthy();
  });
});
