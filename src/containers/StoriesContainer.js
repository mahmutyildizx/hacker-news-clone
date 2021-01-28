import React, { useEffect, useState, memo } from "react";
import { getStoryIds } from "../services/hackernewsApi";
import { Story } from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";
import { useInfiteScroll } from "../hooks/useInfiteScroll";

export const StoriesContainer = () => {
  const { count } = useInfiteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story storyId={storyId} key={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
