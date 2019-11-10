import React from "react";
import { Input, Label } from "./styles";

const SearchInput = props => (
  <>
    <Label>{props.label}</Label>
    <Input
      debounceTimeout={300}
      onChange={props.onSearch}
      type="text"
      placeholder={props.placeholder}
    />
  </>
);

export default SearchInput;
