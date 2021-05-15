import { gql } from "@apollo/client";

export const FETCH_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;

export const FETCH_SINGLE_CONTINENT_DETAILS = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      name
      code
      countries {
        code
        capital
        currency
      }
    }
  }
`;
