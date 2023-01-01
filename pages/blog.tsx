import React from "react";
import styled, { useTheme } from "styled-components";
import MockBlogPosts from "../mocks/blogPosts.json";
import BlogPosts from "../src/components/BlogPosts";
/**
 * TODO
 *  Add Blog route
 *  Add Blog page? or component for the pagE?
 *  Create a blog post option?
 *  May need a db to store all the blogs :) setup postgres and graphql maybe?
 *
 */

const Blog: React.FunctionComponent = () => {
  return (
    <BlogSection>
      <BlogPosts posts={MockBlogPosts.blog_posts} />
    </BlogSection>
  );
};
const BlogSection = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`
);
export default Blog;
