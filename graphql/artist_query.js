import gql from 'graphql-tag';

const ARTIST_QUERY = gql`{
    popular_artists {
      artists {
        name
      }
    }
  }
}`;

export default ARTIST_QUERY;