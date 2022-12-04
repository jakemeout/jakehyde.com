import React from "react";
import styled, { useTheme } from "styled-components";
import Post from "./Post";
type BlogTiles = {
  children: React.ReactNode;
};

const BlogPosts: React.FunctionComponent<BlogTiles> = ({ children }) => {
  const theme = useTheme();
  const renderPosts = (posts: any[]) => {
    posts.map((post: any) => <Post post={post} />);
  };
  return <BlogPostsContainer theme={theme}>{children}</BlogPostsContainer>;
};

const BlogPostsContainer = styled.div(
  ({ theme }) => `
 
`
);

export default BlogPosts;
