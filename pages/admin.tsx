import React from "react";
import styled, { useTheme } from "styled-components";
import MockBlogPosts from "../mocks/blogPosts.json";
import BlogPosts from "../src/components/BlogPosts";
import Router from "next/router";
import BlogForm from "../src/components/BlogForm";
/**
 * TODO
 * Create a backend for likes and comments and storing posts - graphql
 * Create a frontend as admin to create a blog post from the website
 * Paginate in route
 */

const Admin: React.FunctionComponent = () => {
  const theme = useTheme();

  const handleSubmit = async (
    e: React.SyntheticEvent,
    title: string,
    content: string
  ) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
    // Handle the form submission logic here
    console.log("Blog submitted:", { title, content });
  };
  return (
    <AdminStyle theme={theme}>
      <BlogForm onSubmit={handleSubmit} />
    </AdminStyle>
  );
};
const AdminStyle = styled.div(
  ({ theme }) => `
  display: flex;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`
);

export default Admin;
