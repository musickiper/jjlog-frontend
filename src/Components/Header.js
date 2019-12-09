import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {MdSearch} from "react-icons/all";
import {gql} from 'apollo-boost';
import {useMutation} from "react-apollo-hooks";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0;
  height: 12vh;
`;

const Search = styled(Link)`
  margin: 30px;
  padding-top: 5px;
  font-size: 3rem;
  &:hover {
    color: ${props => props.theme.lightGreyColor};
    border-color: ${props => props.theme.lightGreyColor};
`;

const Title = styled(Link)`
  margin: 30px;
  font-size: 3.0rem;
  font-weight: bold;
  transition: transform .2s;
  &:hover {
    transform: scale(1.5);
  }
`;

const LogIn = styled(Link)`
  margin: 30px;
  border: 1px solid ${props => props.theme.blueColor};
  padding: 16px;
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    color: ${props => props.theme.lightGreyColor};
    border-color: ${props => props.theme.lightGreyColor};
  }
`;

const LogOut = styled.div`
  margin: 30px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.blueColor};
  padding: 16px;
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    color: ${props => props.theme.lightGreyColor};
    border-color: ${props => props.theme.lightGreyColor};
  }
`;

const LOG_OUT = gql`
    mutation logUserOut {
        logUserOut @client
    }
`;

const Header = ({isLoggedIn}) => {
    const logOut = useMutation(LOG_OUT)[0];

    return (
        <Container>
            <Search to="/search"><MdSearch/></Search>
            <Title to="/">J J L O G</Title>
            {!isLoggedIn
                ? <LogIn to={"/login"}>Log In</LogIn>
                : <LogOut onClick={logOut}>Log Out</LogOut>
            }
        </Container>
    );
};

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default Header;
