import React from "react";
import { ThemeProvider } from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import Header from "./Header";
import Navigator from "./Navigator";
// import {gql} from "apollo-boost";

// const QUERY = gql(`
//     {
//         isLoggedIn @client
//     }
// `);

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => {
  // const {data: {isLoggedIn}} = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        {/* <AppRouter isLoggedIn={isLoggedIn}/> */}
        <Header />
        <Navigator />
        <AppRouter />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </Wrapper>
    </ThemeProvider>
  );
};
