import React from 'react';
import styled from "styled-components";

const Container = styled.img`
  max-width: 7vh;
  max-height: 7vh;
  border-radius: 50%;
  &:hover{
    filter: blur(4px);
  }
`;

const Image = ({url, alt}) => {
    return (
        <Container src={url} alt={alt}/>
    );
};

export default Image;
