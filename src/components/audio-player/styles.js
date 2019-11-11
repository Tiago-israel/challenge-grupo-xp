import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  background-color: #282828;
  padding: 18px;
  position: sticky;
  bottom: 0px;
`;

export const Current = styled.div`
  width: 100%;
  div {
    margin-left: 12px;
    display: flex;
    span {
      font-size: 13px;
      color: #fff;
      text-align: center;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    margin: 0 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;
