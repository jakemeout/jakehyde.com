import React from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";

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
  const { theme } = useTheme();
  return <BlogContainer theme={theme}>{children}</BlogContainer>;
};

const BlogContainer = styled.h6(
  ({ theme }) => `
 `
);

export default Blog;
