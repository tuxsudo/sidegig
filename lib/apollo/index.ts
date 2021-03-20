import { useMemo } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";
import merge from "deepmerge";
import isEqual from "fast-deep-equal";
import isBrowser from "is-in-browser";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const uri = isBrowser ? `/api/graphql` : process.env.SSR_GRAPHQL_ENDPOINT;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: !isBrowser,
    link: new HttpLink({
      uri,
      credentials: "same-origin",
    }),

    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  });
}

export function initializeApollo(
  initialState: Record<string, any> | null = null
) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: Record<string, any>
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: Record<string, any>) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
