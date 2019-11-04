import React from "react";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";
import Modal from "./components/modal/Index";

export default () => (
  <Provider store={store}>
    <GlobalStyle />
    <Modal enable={false} />
    <Routes />
  </Provider>
);
