import Head from 'next/head';
import MISSION_QUERY from '../graphql/mission_query';
import { initializeApollo } from "../client/apollo";

const Home = (props) => {
  const { loading, error, data } = props;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(error);

  if (error) {
    return <h1>Error fetching data!</h1>;
  }

  console.log(data);
  const { missions } = props.data;

  return (
    <div className="container">
      <Head>
        <title>MISSIONS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          SPACEX MISSIONS
        </h1>

        <div className="grid">
          {missions.map((mission) => (
            <a href={mission.website} className="card" key={mission.id}>
              <h3>{mission.name}</h3>
              <p>{mission.description}</p>
            </a>
          ))}

        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: MISSION_QUERY
  })

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}


export default Home
