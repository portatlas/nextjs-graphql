import Head from 'next/head';
import { useQuery } from '@apollo/client';
import COUNTRY_QUERY from '../graphql/country_query';

const Home = () => {
  const { data, error, loading } = useQuery(
    COUNTRY_QUERY
  );

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching data!</h1>;
  }


  return (
    <div className="container">
      <Head>
        <title>COUNTRY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid">
          <h1 data-testid="country">{data.country.name}</h1>
        </div>
      </main>
    </div>
  )
}

export default Home
