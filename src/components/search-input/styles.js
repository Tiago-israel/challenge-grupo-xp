import styled from "styled-components";

export const Label = styled.label`
  color: #fafafa;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #999999;
  color: #ffffff;
  width: 100%;
  height: 40px;
  font-weight: bold;
  line-height: normal;
  margin-top: 5px;

  ::placeholder {
    color: #999999;
    font-size: 30px;
  }
`;
