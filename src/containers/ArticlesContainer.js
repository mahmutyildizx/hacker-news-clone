import React from "react";
import { Article } from "../components/Article";
import {
  GlobalStyle,
  ArticlesContainerWrapper,
} from "../styles/ArticlesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const ArticlesContainer = () => {
  const { count } = useInfiniteScroll();

  return (
    <>
      <GlobalStyle />
      <ArticlesContainerWrapper data-test-id="articles-container">
        <h1>News Stories</h1>
      </ArticlesContainerWrapper>
    </>
  );
};
