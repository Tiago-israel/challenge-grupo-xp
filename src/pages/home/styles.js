import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
