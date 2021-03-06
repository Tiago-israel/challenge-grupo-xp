import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-row-start: 2;
  grid-row-end: span 2;

  @media (min-width: 200px) and (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  .div1 {
    justify-self: end;
    margin-right: 50px;

    @media (min-width: 200px) and (max-width: 700px)  {
      margin-right: 0px;
    }
  }
`;

export const Track = styled.div`
  color: #fff;
  padding: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
  &:last-child{
    margin-bottom: 100px;
   }
`;

export const TrackNumber = styled.span`
  margin-right: 15px;
  color: #999999;
  width: 10px;
`;

export const Time = styled.span`
  float: right;
  color: #999999;
`;

export const Back = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-bottom: 20px;
`;
