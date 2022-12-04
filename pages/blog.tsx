import React from "react";
import styled, { useTheme } from "styled-components";
/**
 * TODO
 *  Add Blog route
 *  Add Blog page? or component for the pagE?
 *  Create a blog post option?
 *  May need a db to store all the blogs :) setup postgres and graphql maybe?
 *
 */

type BlogProps = {
  children: React.ReactNode;
};

const Blog: React.FunctionComponent<BlogProps> = ({ children }) => {
  const theme = useTheme();
  return <BlogContainer theme={theme}>Hello World{children}</BlogContainer>;
};

const BlogContainer = styled.h6(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  align-items:center;

 `
);

export default Blog;
