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
  ::placeholder {
    color:${props => props.theme.greyColor};
  }
`;

const Input = ({placeholder, required = false, value, onChange, type = "text"}) =>
    <Container
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
    />;

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default Input;