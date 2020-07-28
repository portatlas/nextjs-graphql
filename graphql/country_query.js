import gql from 'graphql-tag';

const COUNTRY_QUERY = gql`
{
    country(code: "BR") {
      name
      capital
    }
  }
`;

export default COUNTRY_QUERY;