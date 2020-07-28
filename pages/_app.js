import { ApolloProvider } from '@apollo/client';
import client from '../client/apollo';


export default function App({ Component, pageProps }) {
  // const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}