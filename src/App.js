import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ArticlesContainer } from "./containers/ArticlesContainer";

export function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
  });
  
  return (
    <ApolloProvider client={client}>
      <ArticlesContainer />
    </ApolloProvider>
  );
}
