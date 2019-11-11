import React from "react";
import { shallow } from "enzyme";
import Container from "../../components/container";

describe("Container component test", () => {
  it("should render div", () => {
    const wrapper = shallow(
      <Container>
        <div></div>
      </Container>
    );
    expect(wrapper.find(<div></div>)).toBeTruthy();
  });
});
