import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch'
const URI = "https://countries.trevorblades.com/";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URI,
    fetch: fetch,
    useGETForQueries: true
  })
});

export default client;
