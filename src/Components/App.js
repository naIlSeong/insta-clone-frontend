import React from "react";
import { gql } from "apollo-boost";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <Router isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
};
