import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 270px;
  background-color: ${(props) => props.theme.blueColor};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 7px 0;
  margin: 10px 0;
  font-size: 14px;
  font-weight: 600;
`;

const Button = ({ text }) => <Container>{text}</Container>;

Button.propTyes = {
  text: PropTypes.string.isRequired,
};

export default Button;
