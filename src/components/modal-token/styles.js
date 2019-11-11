import styled from "styled-components";

export const Input = styled.input`
  border: 0;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  background-color: transparent;
  color: #fff;
  border-bottom: 1px solid #f6f6f6;
`;

export const BtnSendToken = styled.button`
  color: #fff;
  border: 0;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  background: #1ed760;
  font-weight: bold;
  font-size: 14px;
  left: 0;
  top: 0;
  display: block;
  &:hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  }
`;
