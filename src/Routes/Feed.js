import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      caption
      location
      user {
        id
        username
        avatar
      }
      files {
        id
        url
      }
      comments {
        id
        text
        user {
          id
          avatar
        }
      }
      isLike
      likeCount
    }
    createdAt
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default () => {
  const { seeFeed, loading } = useQuery(FEED_QUERY);
  return <Wrapper>{loading && <Loader />}</Wrapper>;
};
