import { ApolloClient, InMemoryCache } from "@apollo/client";
const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;

// import { useMemo } from "react";
// import {
//   ApolloClient,
//   HttpLink,
//   InMemoryCache,
//   NormalizedCacheObject,
// } from "@apollo/client";

// let apolloClient: ApolloClient<NormalizedCacheObject>;

// function createApolloClient() {
//   return new ApolloClient({
//     ssrMode: typeof window === "undefined", // set to true for SSR
//     link: new HttpLink({
//       uri: "http://localhost:3000/api/graphql",
//     }),
//     cache: new InMemoryCache(),
//   });
// }

// export function initializeApollo(initialState: any = null) {
//   const _apolloClient = apolloClient ?? createApolloClient();

//   if (initialState) {
//     // Get existing cache, loaded during client side data fetching
//     const existingCache = _apolloClient.extract();

//     _apolloClient.cache.restore({ ...existingCache, ...initialState });
//   }

//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === "undefined") return _apolloClient;

//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient;
//   return _apolloClient;
// }

// export function useApollo(initialState: any) {
//   const store = useMemo(() => initializeApollo(initialState), [initialState]);
//   return store;
// }
