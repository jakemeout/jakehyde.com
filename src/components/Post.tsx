import React from "react";
import styled, { useTheme } from "styled-components";

export type PostProps = {
  id: number;
  title: string;
  content: string;
  datetime: string;
  post: PostType;
};

export type PostType = {
  id: number;
  title: string;
  content: string;
  datetime: string;
};

const Post: React.FunctionComponent<PostProps> = ({ post }) => {
  const theme = useTheme();
  return (
    <PostContainer theme={theme}>
      <PostHeader>
        <div>{post.title}</div>
        <div>{post.datetime}</div>
      </PostHeader>
      <PostBody>{post.content}</PostBody>
    </PostContainer>
  );
};

const DateStyle = styled.div``;
const PostHeader = styled.div(
  ({ theme }) => `
  display:flex;
  justify-content: space-between;
  margin: 1%;
  font-weight: 500;
`
);

const PostBody = styled.div(
  ({ theme }) => `
  margin: 1%;
  padding: 3%;
`
);

const PostContainer = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  color: ${theme.text.primary};
  
  font-weight: 200;
  font-size: 16px;
  justify-content:flex-start;
  padding: 3%;
  margin: 2%;
  width: 75%;
  min-height: 400px;
  border-radius: 10px;
  border: .5px solid rgba( 255, 255, 255, 0.18 );
  backdrop-filter: blur( 7.5px );
  background: rgba( 255, 255, 255, 0.02 );
  -webkit-backdrop-filter: blur( 7.5px );
  box-shadow: 0 1px 10px 0 rgba( 0, 0, 0, 0.07 );
  z-index: 4;
`
);

export default Post;
