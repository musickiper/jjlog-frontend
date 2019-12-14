import React, {useState} from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
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
            <SearchForm onSubmit={onSubmit}>
                <Input placeholder={"Enter keyword here"} value={term} onChange={onChange}/>
            </SearchForm>
        </Container>
    );
};

export default Search;
