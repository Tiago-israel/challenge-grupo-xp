import styled from "styled-components";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  &::after {
    content: "";
    width: 39px;
    height: 23px;
    background-color: #fff;
    position: relative;
    top: -40px;
    right: -10px;
    z-index: -1;
  }

  img {
  }
`;

export default Header;
