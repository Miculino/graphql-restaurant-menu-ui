// Apollo
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// Configure Apollo Client with custom HTTP link for CORS support
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API_ENDPOINT,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});
