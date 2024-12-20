import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

// Configure Apollo Client with custom HTTP link for CORS support
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API_ENDPOINT,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "apollo-require-preflight": "true",
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
