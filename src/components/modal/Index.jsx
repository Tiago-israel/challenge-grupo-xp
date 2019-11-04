import React from "react";
import Modal from "./styles";
import SearchInput from "../search-input/Index";

export default props => (
  <Modal enable={props.enable}>
    <div>
      <span>&times;</span>
      <SearchInput
        label="Sessão expirada!"
        placeholder="por favor insira o token"
      />
    </div>
  </Modal>
);
