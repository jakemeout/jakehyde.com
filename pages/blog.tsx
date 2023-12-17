import React from "react";
import styled, { useTheme } from "styled-components";
import BlogPosts from "../src/components/BlogPosts";
import prisma from "../lib/prisma";
/**
 * TODO
 * Create a backend for likes and comments and storing posts - graphql
 * Create a frontend as admin to create a blog post from the website
 * Paginate in route
 */

const Blog: React.FunctionComponent = () => {
  const posties =  prisma.post.findMany();
  console.log(posties)
  return (
    <BlogSection>
      <BlogPosts posts={posts} />
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
