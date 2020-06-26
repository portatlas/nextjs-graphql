import gql from 'graphql-tag';

const MISSIONS_QUERY = gql`
{
  missions {
    id
    name
    website
    description
    payloads {
      id
    }
    wikipedia
  }
}

`;

export default MISSIONS_QUERY;