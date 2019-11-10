import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import Container from "./components/container";
import Header from "./layouts/header/Index";

export default props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Header />
      <Container>
        <Routes />
      </Container>
    </PersistGate>
  </Provider>
);
