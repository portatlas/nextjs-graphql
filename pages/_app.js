import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../client/apollo';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}