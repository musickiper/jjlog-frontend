import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0;
`;

const Search = styled(Link)``;

const Title = styled(Link)``;

const LogIn = styled(Link)``;

const Avatar = styled(Link)``;

const HeaderPresenter = ({ isLoggedIn }) => {
  return (
    <Container>
      <Search to="/search">Search</Search>
      <Title to="/">Title</Title>
      {isLoggedIn ? (
        <Avatar to="/profile">Avatar</Avatar>
      ) : (
        <LogIn to="/login">LogIn</LogIn>
      )}
    </Container>
  );
};

HeaderPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default HeaderPresenter;
