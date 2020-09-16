import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import Avatar from "../Avatar";
import FatText from "../FatText";
import { Comment, HeartEmpty, HeartFull } from "../Icon";

const Post = styled.div`
  ${(props) => props.theme.whiteBox}
  width: 100%;
  max-width: 615px;
  margin-bottom: 60px;
`;

const Header = styled.header`
  border-bottom: ${(props) => props.theme.boxBorder};
  height: 62px;
  display: flex;
  padding: 16px;
`;

const UserColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 14px;
  width: 100%;
`;

const Location = styled.span`
  font-size: 12px;
  padding-top: 6px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
  max-width: 100%;
  width: 100%;
  height: 615px;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src}});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Meta = styled.div`
  padding: 14px;
  border-bottom: ${(props) => props.theme.boxBorder};
`;

const Buttons = styled.div`
  margin-bottom: 6px;
`;

const Button = styled.span`
  cursor: pointer;
  margin-right: 14px;
`;

const CaptionColumn = styled.div`
  padding: 6px 0;
`;

const CaptionText = styled.span`
  margin-left: 6px;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.darkGreyColor};
`;

const CommentContainer = styled.div`
  padding: 14px;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  font-family: inherit;
`;

export default ({
  user: { username, avatar },
  location,
  caption,
  files,
  isLike,
  likeCount,
  createdAt,
  newComment,
  currentItem,
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <FatText text={username} />
        {location ? <Location>{location}</Location> : <></>}
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, index) => (
          <File
            key={file.id}
            id={file.id}
            src={file.url}
            showing={index === currentItem}
          />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button>{isLike ? <HeartFull /> : <HeartEmpty />}</Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      <CaptionColumn>
        <FatText text={username} />
        <CaptionText>{caption}</CaptionText>
      </CaptionColumn>
      <Timestamp>{createdAt}</Timestamp>
    </Meta>
    <CommentContainer>
      <Textarea placeholder={"Add a comment..."} {...newComment} />
    </CommentContainer>
  </Post>
);
