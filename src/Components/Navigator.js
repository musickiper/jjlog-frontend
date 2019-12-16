import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0;
  height: 12vh;
`;

const Tab = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-weight: ${({ isActive }) => isActive && "bold"}
  border-bottom: ${({ isActive, theme }) =>
    isActive && `3px solid ${theme.lightGreyColor}`};
  color: ${({ isActive, theme }) =>
    isActive ? `${theme.lightGreyColor}` : `${theme.blueColor}`};
  cursor: pointer;
`;

const Navigator = ({ history }) => {
  const redirectTo = path => history.push(path);
  const { pathname } = history.location;

  return (
    <Container>
      <Tab
        isActive={pathname === "/aboutme"}
        onClick={() => redirectTo("/aboutme")}
      >
        About Me
      </Tab>
      <Tab
        isActive={pathname === "/projects"}
        onClick={() => redirectTo("/projects")}
      >
        Projects
      </Tab>
      <Tab
        isActive={pathname === "/categories"}
        onClick={() => redirectTo("/categories")}
      >
        Categories
      </Tab>
    </Container>
  );
};

export default withRouter(Navigator);
