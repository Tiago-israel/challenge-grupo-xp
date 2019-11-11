import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${props => (props.enable ? "visible" : "hidden")};
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #282828;
  padding: 40px;
  border-radius: 0.1rem;
  color: #fff;
`;

export default Modal;
