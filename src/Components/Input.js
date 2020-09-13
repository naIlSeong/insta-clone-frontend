import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  width: 270px;
  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  border-radius: 2px;
  padding: 10px 10px;
  margin: 2px 0;
  ::placeholder {
    color: ${(props) => props.theme.darkGreyColor};
  }
`;

const Input = ({ placeholder }) => <Container placeholder={placeholder} />;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Input;
