import React from 'react';
import { useQuery, gql } from "@apollo/client";

const FETCH_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;


const Components:React.FC = () => {
  const { loading, error, data } = useQuery(FETCH_CONTINENTS);
  return (
    <div>
      api values
      {data?.continents?.map((eachContinent: any) => {
        return(
        <li>
          {eachContinent?.name} <span>{eachContinent?.code}</span>
        </li>
        )
      })}
    </div>
  );
}

export default Components;