import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  height: 60px;
  font-size: 20px;
  padding-left: 15px;
`;

const Input = ({placeholder}) => <Container placeholder={placeholder}/>;

Input.propTypes = {
    placeholder: PropTypes.string.isRequired
};

export default Input;