import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const Label = styled.label`
  color: #fafafa;
`;

export const Input = styled(DebounceInput)`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #999999;
  color: #ffffff;
  width: 100%;
  height: 40px;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  margin-top: 5px;

  ::placeholder {
    color: #999999;
    font-size: 30px;
  }
`;
