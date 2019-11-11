import React from "react";
import { Modal, ModalContent } from "./styles";

export default props => {
  return (
    <Modal enable={props.enable}>
      <ModalContent>{props.children}</ModalContent>
    </Modal>
  );
};
