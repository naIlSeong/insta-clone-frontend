import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

import userInput from "../Hooks/useInput";

import Input from "./Input";
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

// Query
const ME = gql`
  query {
    me {
      username
    }
  }
`;

export default withRouter(({ history }) => {
  const search = userInput("");
  const { data } = useQuery(ME);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
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
          <form onSubmit={onSearchSubmit}>
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
            {!data ? (
              <HeaderLink to="/#">
                <User />
              </HeaderLink>
            ) : (
              <HeaderLink to={data.me.username}>
                <User />
              </HeaderLink>
            )}
          </HeaderColumnRight>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
