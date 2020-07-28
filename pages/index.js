import Head from 'next/head';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import COUNTRY_QUERY from '../graphql/country_query';
import encrypt from '../services/encrypt';

const Home = () => {
  const [message, setMessage] = useState("");
  const { data, error, loading } = useQuery(
    COUNTRY_QUERY
  );

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching data!</h1>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const str = data.country.name;
    const key = parseInt(e.target.elements.key.value);
    const value = encrypt.caesarCipher(str, key);
    setMessage(`The encrypted message is: ${value}`);
  };

  return (
    <div className="container">
      <Head>
        <title>COUNTRY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div >
          <h1>Caesar Cipher Encrypt</h1>
          <h2>Encrypt the below message with a Caesar Cipher by passing a key to offset the value</h2>
          <h3>ie. a key of 1 will offset "Brazil" to "CSBAJM" </h3>
          <form
            onSubmit={handleSubmit}>
            <label>Country: </label>
            <input
              data-testid="countryInput"
              name="country"
              value={data.country.name}
              readOnly={true}
              disabled={true}>
            </input>
            <br />
            <label>Offset Key: </label>
            <input
              name="key"
              defaultValue={1}
              data-testid="offsetKey">
            </input>
            <br />
            <button type="submit" data-testid='button'>Submit</button>
          </form>
          {message && message.length >= 0 &&
            <h2>{message}</h2>
          }
        </div>
      </main>
    </div>
  )
}

export default Home
