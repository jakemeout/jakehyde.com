import React from "react";
import styled from "styled-components";
import MockBlogPosts from "../mocks/blogPosts.json";
import BlogPosts from "../src/components/BlogPosts";
/**
 * TODO
 * Create a backend for likes and comments and storing posts - graphql
 * Create a frontend as admin to create a blog post from the website
 * Paginate in route
 */

const Blog: React.FunctionComponent = () => {
  return (
    <BlogSection>
      <BlogPosts posts={MockBlogPosts.blog_posts} />
    </BlogSection>
  );
};
const BlogSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;
export default Blog;
