import React from "react";
import styled, { useTheme } from "styled-components";

type PostProps = {
  post: Post;
};
type Post = {
  details: string;
};
const Post: React.FunctionComponent<PostProps> = ({ post }) => {
  const theme = useTheme();
  return <PostContainer theme={theme}>{post.details}</PostContainer>;
};

const PostContainer = styled.div(
  ({ theme }) => `
 
`
);

export default Post;
