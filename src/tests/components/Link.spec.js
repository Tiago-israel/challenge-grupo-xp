import React from "react";
import { shallow } from "enzyme";
import Link from "../../components/link";

describe("Link component test", () => {
  it("should render text Link", () => {
    const text = "url";
    const wrapper = shallow(
      <Link to="/">
        <span>{text}</span>
      </Link>
    );
    expect(wrapper.find("span").text() === text).toBeTruthy();
  });
});
