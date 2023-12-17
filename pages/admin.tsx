import React from "react";
import styled, { useTheme } from "styled-components";
import Router from "next/router";
import BlogForm from "../src/components/BlogForm";
/**
 * TODO
 * Create a backend for likes and comments and storing posts - graphql
 */

const Admin: React.FunctionComponent = () => {
  const theme = useTheme();

  const handleSubmit = async (
    e: React.SyntheticEvent,
    title: string,
    content: any
  ) => {
    e.preventDefault();
    console.log("Blog submitted:", { title, content });
    try {
      const body = { title, content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
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
