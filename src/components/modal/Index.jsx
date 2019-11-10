import React from "react";
import Modal from "./styles";

export default props => (
  <Modal enable={props.enable}>
    <div>{props.children}</div>
  </Modal>
);
