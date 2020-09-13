import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 600;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Link = styled.a`
  color: rgba(var(--fe0, 0, 55, 107), 1);
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">ABOUT</Link>
      </ListItem>
      <ListItem>
        <Link href="#">HELP</Link>
      </ListItem>
      <ListItem>
        <Link href="#">PRESS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">API</Link>
      </ListItem>
      <ListItem>
        <Link href="#">JOBS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">PRIVACY</Link>
      </ListItem>
      <ListItem>
        <Link href="#">TERMS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">LOCATIONS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">TOP ACCOUNTS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">HASHTAGS</Link>
      </ListItem>
      <ListItem>
        <Link href="#">LANGUAGE</Link>
      </ListItem>
    </List>
    <Copyright>
      &copy; {new Date().getFullYear()} INSTACLONE FROM ILSEONG
    </Copyright>
  </Footer>
);
