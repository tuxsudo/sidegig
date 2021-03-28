import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { Provider as NextAuthProvider } from "next-auth/client";

import { useApollo } from "../lib/apollo";

import { Normalize } from "../components/style/normalize";
import { GlobalStateProvider } from "../components/global-state";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <NextAuthProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <GlobalStateProvider>
          <Normalize />
          <Component {...pageProps} />
        </GlobalStateProvider>
      </ApolloProvider>
    </NextAuthProvider>
  );
}
