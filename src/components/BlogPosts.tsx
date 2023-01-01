import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Post from "./Post";
import { PostType } from "./Post";
import Button from "./Button";
type Posts = {
  posts: PostType[];
};

const BlogPosts: React.FunctionComponent<Posts> = ({ posts }) => {
  const [pageNum, setPageNum] = useState(0);
  const theme = useTheme();

  const renderPage = (pageNum: number) => {
    return <Post key={posts[pageNum].id} post={posts[pageNum]} />;
  };

  const onPageHanler = (e: any) => {
    e.target.dataset.id;
  };

  return (
    <BlogPostsContainer theme={theme}>
      <>{renderPage(pageNum)}</>
      <FooterNavigation >
        {pageNum !== 0 && (
          <Button
            identifier={"back"}
            buttonText={"last blog"}
            buttonIcon={"←"}
            onClick={onPageHanler}
          />
        )}
        <Button
          identifier={"forward"}
          buttonText={"next blog"}
          buttonIcon={"→"}
          onClick={onPageHanler}
        />
      </FooterNavigation>
    </BlogPostsContainer>
  );
};
const FooterNavigation = styled.div(
  ({  }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
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
