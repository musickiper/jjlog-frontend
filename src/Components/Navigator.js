import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0;
  height: 12vh;
`;

const Tab = styled(Link)`
  
`;

export default () => {
    return(
        <Container>
            <Tab to={"/aboutme"}>About Me</Tab>
            <Tab to={"/projects"}>Projects</Tab>
            <Tab to={"/categories"}>Categories</Tab>
        </Container>
    )};
