import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {gql} from 'apollo-boost';
import {useQuery} from "react-apollo-hooks";

const Container = styled.div`
  display:grid;
  margin: 1vh 1vh;
  grid-template-columns: repeat(2, 1fr);
  ${({theme}) => `
      @media ${theme.tablet} {
          grid-template-columns: repeat(5, 1fr);
      }
    `};
  grid-gap: 1rem;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.darkBlueColor};
  &:hover {
    background-color:${props => props.theme.darkBlueColor};
    cursor:pointer;
    a, span {
      color:white;
    }
`;

const Category = styled(Link)`
  margin-bottom: 1rem;
  color: ${props => props.theme.darkBlueColor};
`;

const CategoryCount = styled.span`
  color: ${props => props.theme.darkBlueColor};
`;

const allCategories = gql`
    query {
        allCategories {
            id
            title
            count
        }
    }
`;

const Categories = ({history}) => {
    const {data, loading, error} = useQuery(allCategories);

    const onClick = (title) => {
        history.push(`/projects/${title}`);
    };

    if (error) {
        throw Error(error);
    }

    if (loading) {
        return <div>loading...</div>
    } else {
        const {allCategories} = data;
        return (
            <Container>
                {allCategories.map(({id, title, count}) => (
                    count !== 0 && (<CategoryBox key={id} onClick={() => onClick(title)}>
                            <Category to={`/projects/${title}`}>{title}</Category>
                            <CategoryCount>Count: {count}</CategoryCount>
                        </CategoryBox>
                    )))}
            </Container>
        );
    }
};

export default Categories;
