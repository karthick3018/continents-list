import React from 'react';
import { useQuery, useLazyQuery } from "@apollo/client";
import * as graphql  from '../graphql/query/continents';
import ContinentList from './continentList';


const Components:React.FC = () => {
  const { loading, error, data } = useQuery(graphql?.FETCH_CONTINENTS);
  const [getContinentDetails, { loading: detailsLoading, data: detailsData }] = useLazyQuery(
    graphql?.FETCH_SINGLE_CONTINENT_DETAILS
  );


  const handleContinentClick = (code: string) => {
     getContinentDetails({ variables: { code } });
  }  

  return (
    <div>
      api values
      <ContinentList
        continentList={data?.continents}
        handleContinentClick={handleContinentClick}
      />
    </div>
  );
}

export default Components;