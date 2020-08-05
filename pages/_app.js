import { ApolloProvider } from '@apollo/client';
import client from '../client/apollo';


export default function App({ Component, pageProps }) {

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}