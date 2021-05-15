import React,{useState} from 'react';
import { useQuery, useLazyQuery } from "@apollo/client";
import * as graphql  from '../graphql/query/continents';
import ContinentList from './continentList';
import ContinentDetails from './continentDetails';
import './index.css';


const Components:React.FC = () => {
  const { loading, error, data } = useQuery(graphql?.FETCH_CONTINENTS);
  const [getContinentDetails, { loading: detailsLoading, data: detailsData }] = useLazyQuery(
    graphql?.FETCH_SINGLE_CONTINENT_DETAILS
  );
  const [isModalOpen,setIsModalOpen] = useState<boolean>(false);


  const handleContinentClick = (code: string) => {
     getContinentDetails({ variables: { code } });
     setIsModalOpen(true);
  }  

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

 
  return (
    <div className="container">
      <ContinentList
        continentList={data?.continents}
        handleContinentClick={handleContinentClick}
        isLoading={loading}
      />
      <ContinentDetails
        details={detailsData?.continent}
        isModalOpen={isModalOpen}
        onModalClose={handleModalClose}
        isLoading={detailsLoading}
      />
      {error && <p>something seems wrong ! more info: {error}</p>}
    </div>
  );
}

export default Components;