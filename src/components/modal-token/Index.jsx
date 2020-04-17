import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/Index";
import { Input, BtnSendToken } from "./styles";
import * as AlbumsActions from "../../store/ducks/albums";
import * as AuthActions from "../../store/ducks/auth";

const ModalToken = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const { showModal } = useSelector(state => state.albums);

  const sendToken = useCallback(() => {
    dispatch(AuthActions.setToken(token));
    dispatch(AlbumsActions.closeModal());
  }, [dispatch, token]);

  return (
    <Modal enable={showModal}>
      <div>
        <h2>Por favor insira o token de autenticação</h2>
        <Input onChange={e => setToken(e.target.value)} type="text" />
        <BtnSendToken disabled={!token} onClick={sendToken}>
          Eviar
        </BtnSendToken>
      </div>
    </Modal>
  );
};

export default ModalToken;
