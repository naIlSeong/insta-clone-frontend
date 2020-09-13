import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle";
import Theme from "../Styles/Theme";
import Router from "./Router";

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyle />
      <Router isLoggedIn={!false} />
    </>
  </ThemeProvider>
);
