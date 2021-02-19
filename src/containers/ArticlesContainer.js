import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Article } from "../components/Article";
import {
  GlobalStyle,
  ArticlesContainerWrapper,
} from "../styles/ArticlesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { GET_ALL_ARTICLES } from "../graphql/get-all-articles";

export const ArticlesContainer = () => {
  const { count } = useInfiniteScroll();
  const { data: { allArticles = [] } = {} } = useQuery(GET_ALL_ARTICLES);

  return (
    <>
      <GlobalStyle />
      <ArticlesContainerWrapper data-test-id="articles-container">
        <h1>News Stories</h1>
        {allArticles &&
          allArticles
            .slice(0, count)
            .map((article) => <Article key={article.id} article={article} />)}
      </ArticlesContainerWrapper>
    </>
  );
};
