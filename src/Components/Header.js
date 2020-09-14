import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "./Input";
import userInput from "../Hooks/useInput";
import { HeartEmpty, CompassEmpty, User } from "./Icon";

const Header = styled.header`
  width: 100%;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border: 0;
  border-bottom: ${(props) => props.theme.boxBorder};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
  height: 100%;
`;

const HeaderColumn = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  &:first-child {
    justify-content: right;
  }
`;

const HeaderColumnRight = styled.div`
  width: 32%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
`;

const HeaderLink = styled(Link)``;

const SearchInput = styled(Input)`
  width: 215px;
  height: auto;
  font-size: 14px;
  padding: 6px;
  border-radius: 3px;
  text-align: center;
`;

export default () => {
  const search = userInput("");
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <img
              aria-label="home"
              alt="home"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form>
            <SearchInput {...search} placeholder="Search" />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderColumnRight>
            <HeaderLink to="/explore">
              <CompassEmpty />
            </HeaderLink>
            <HeaderLink to="/notification">
              <HeartEmpty />
            </HeaderLink>
            <HeaderLink to="/username">
              <User />
            </HeaderLink>
          </HeaderColumnRight>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};
