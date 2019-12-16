import React, {useState} from "react";
import styled from 'styled-components';
import {Helmet} from "react-helmet";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity:    0.5; 
  background: #000; 
  width:      100%;
  height:     100%; 
  z-index:    10;
  top:        0; 
  left:       0; 
  position:   fixed;
`;

const SearchForm = styled.form`
  width: 60%;
  height: 4rem;
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  font-size: 2.5rem;
  padding: 2rem;
  color: ${props => props.theme.blackColor};
  opacity: 0.7;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  &::placeholder {
    color: ${props => props.theme.lightGreyColor};
  }
`;

const Search = ({history}) => {
    const [term, setTerm] = useState("");

    const onChange = (e) => setTerm(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/projects?term=${term}`);
    };

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Search</title>
            </Helmet>
            <SearchForm onSubmit={onSubmit}>
                <Input type={"text"} placeholder={"Enter keyword here"} value={term} onChange={onChange}/>
            </SearchForm>
        </Container>
    );
};

export default Search;
