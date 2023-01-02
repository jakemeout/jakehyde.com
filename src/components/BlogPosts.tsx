import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Post from "./Post";
import { PostType } from "./Post";
import Button from "./Button";
type Posts = {
  posts: PostType[];
};
type PageNumPropType = { pageNum: number };

const BlogPosts: React.FunctionComponent<Posts> = ({ posts }) => {
  const [pageNum, setPageNum] = useState(0);
  const theme = useTheme();

  const renderPage = (pageNum: number) => {
    return <Post key={posts[pageNum].id} post={posts[pageNum]} />;
  };

  const onPageHandler = (e: any) => {
    pageNum === posts.length && alert("This is the end dude");
    e.target.dataset.id === "forward" && pageNum !== posts.length
      ? setPageNum(pageNum + 1)
      : setPageNum(pageNum - 1);
  };

  return (
    <BlogPageLayout>
      <BlogPostsContainer theme={theme}>
        {renderPage(pageNum)}
      </BlogPostsContainer>
      <FooterNavigation pageNum={pageNum}>
        {pageNum !== 0 && (
          <Button
            identifier={"back"}
            buttonText={"newer posts"}
            buttonIcon={"←"}
            onClick={onPageHandler}
          />
        )}
        <Button
          identifier={"forward"}
          buttonText={"older posts"}
          buttonIcon={"→"}
          onClick={onPageHandler}
        />
      </FooterNavigation>
    </BlogPageLayout>
  );
};
//
const BlogPageLayout = styled.div(
  ({}) => `
  width: 100%;
`
);

const FooterNavigation = styled.div<PageNumPropType>(
  ({ pageNum }) => `
  display: flex;
  flex-direction: row;
  justify-content: ${pageNum === 0 ? "flex-end" : "space-between"};
  padding-left: 10%;
  padding-right: 10%;
`
);

const BlogPostsContainer = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`
);

export default BlogPosts;
