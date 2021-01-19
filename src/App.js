import React, { useEffect, useState } from "react";
import { getStoryIds } from "./services/hackernewsApi";

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    console.log(getStoryIds());
  }, []);

  return <p>{storyIds}</p>;
};
