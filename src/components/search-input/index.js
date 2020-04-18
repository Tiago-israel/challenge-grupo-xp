import React from "react";
import { Input, Label } from "./styles";

const SearchInput = props => (
  <>
    <Label>{props.label}</Label>
    <Input
      delay={300}
      onChangeFn={props.onSearch}
      type="text"
      placeholder={props.placeholder}
    />
  </>
);

export default SearchInput;
