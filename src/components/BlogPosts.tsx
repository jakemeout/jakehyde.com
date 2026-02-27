import React, { useState } from "react";
import Post from "./Post";
import { PostType } from "./Post";
import Button from "./Button";
import styled from "styled-components";

type Posts = {
  posts: PostType[];
};
type PageNumPropType = { pageNum: number; children?: React.ReactNode };

const BlogPosts: React.FunctionComponent<Posts> = ({ posts }) => {
  const [pageNum, setPageNum] = useState(0);

  const renderPage = (pageNum: number) => {
    return <Post key={posts[pageNum].id} post={posts[pageNum]} />;
  };

  const onPageHandler = (e: any) => {
    e.target.dataset.id === "forward" && pageNum < posts.length - 1
      ? setPageNum(pageNum + 1)
      : setPageNum(pageNum - 1);
  };

  return (
    <BlogPageLayout>
      <BlogPostsContainer>{renderPage(pageNum)}</BlogPostsContainer>
      <FooterNavigation pageNum={pageNum}>
        <Button
          identifier={"back"}
          buttonText={"newer posts"}
          buttonIcon={"←"}
          onClick={onPageHandler}
          hidden={pageNum === 0}
          disabled={pageNum === 0}
        />
        <Button
          identifier={"forward"}
          buttonText={"older posts"}
          buttonIcon={"→"}
          onClick={onPageHandler}
          hidden={pageNum === posts.length - 1}
          disabled={pageNum === posts.length - 1}
        />
      </FooterNavigation>
    </BlogPageLayout>
  );
};
//
const BlogPageLayout = styled.div(
  ({}) => `
  width: 100%;
`,
);

const FooterNavigation = styled.div<PageNumPropType>(
  ({ pageNum }) => `
  display: flex;
  flex-direction: row;
  justify-content: ${pageNum === 0 ? "flex-end" : "space-between"};
  padding-left: 10%;
  padding-right: 10%;
`,
);

const BlogPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export default BlogPosts;
