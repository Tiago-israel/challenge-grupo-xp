import styled from "styled-components";

export const Section = styled.section`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const TextResult = styled.h3`
  color: #fff;
  margin-top: 50px;
`;
