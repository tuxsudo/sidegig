import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";

import { Normalize } from "../components/style/normalize";
import { GlobalStateProvider } from "../components/global-state";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStateProvider>
        <Normalize />
        <Component {...pageProps} />
      </GlobalStateProvider>
    </ApolloProvider>
  );
}
