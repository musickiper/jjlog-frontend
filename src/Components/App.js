import React from "react";
import {ThemeProvider} from "styled-components";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import Header from "./Header";
import Navigator from "./Navigator";
import {useQuery} from "react-apollo-hooks";
import {gql} from "apollo-boost";

const QUERY = gql(`
    {
        isLoggedIn @client
    }
`);

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const App = () => {
    const {
        data: {isLoggedIn}
    } = useQuery(QUERY);
    return (
        <ThemeProvider theme={Theme}>
            <Wrapper>
                <GlobalStyles/>
                <Header isLoggedIn={isLoggedIn}/>
                <Navigator/>
                <AppRouter/>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
            </Wrapper>
        </ThemeProvider>
    );
};

export default App;
