import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  justify-contents: center;
  align-items: center;
`;

const ErrorMessage = styled.span`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.darkBlueColor};
`;

export default () => (
  <Container>
    <ErrorMessage>404 Page Not Found</ErrorMessage>
  </Container>
);
