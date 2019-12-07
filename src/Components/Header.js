// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {MdSearch} from "react-icons/all";
import {gql} from "apollo-boost";
import {useQuery} from "react-apollo-hooks";
import Image from "./Image";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0;
  height: 12vh;
`;

const Search = styled(Link)`
  margin: 16px;
  font-size: 7vh;
  &:hover {
    color: ${props => props.theme.lightGreyColor};
    border-color: ${props => props.theme.lightGreyColor};
`;

const Title = styled(Link)`
  margin: 16px;
  font-size: 3.0rem;
  font-weight: bold;
  transition: transform .2s;
  &:hover {
    transform: scale(1.5);
  }
`;

const LogIn = styled(Link)`
  margin: 16px;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.blueColor};
  padding: 10px 16px;
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    color: ${props => props.theme.lightGreyColor};
    border-color: ${props => props.theme.lightGreyColor};
  }
`;

const Avatar = styled(Link)`
  margin: 16px;
  padding: 10px 16px;
`;

const ME = gql`
    query {
        me {
            avatar,
            username
        }
    }
`;

const Header = ({isLoggedIn}) => {
    const {data, loading} = useQuery(ME);
    if (loading) {
        return <div>Loading...</div>;
    }
    // It should be replaced by another way
    // ISSUE: when loading is done, still data remains empty, so it causes error below
    if(isLoggedIn && !data.me) window.location.replace('/');

    return (
        <Container>
            <Search to="/search"><MdSearch/></Search>
            <Title to="/">J J L O G</Title>
            {
                isLoggedIn && data.me
                    ? <Avatar to={`/profile/${data.me.username}`}><Image url={data.me.avatar}
                                                                         alt={data.me.username}/></Avatar>
                    : <LogIn to="/auth">Log In</LogIn>
            }
        </Container>
    );
};

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default Header;
