import React from 'react';
import ContinentIcon from './maps-and-flags.svg';
import './index.css'

type TContinentListItems = {
  code: string;
  name: string;
};

type TContinentListProps = {
  continentList: TContinentListItems[];
  handleContinentClick : (code:string) => void
};


const ContinentList= ({
  continentList,
  handleContinentClick,
}: TContinentListProps) => {
  return (
    <>
      {continentList?.map((eachContinent: TContinentListItems) => {
        return (
          <li
            className="list-wrapper"
            key={eachContinent?.code}
            onClick={() => handleContinentClick(eachContinent?.code)}
          >
            <figure className="list-figure">
              <img
                src={ContinentIcon}
                alt="continents"
              />
            </figure>
            <p>{eachContinent?.name}</p>
            <p>{eachContinent?.code}</p>
          </li>
        );
      })}
    </>
  );
};

export default React.memo(ContinentList);