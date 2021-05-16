import React from 'react';
import Loader from '../loader';
import {COLORS} from '../../common/helper';
import './index.css'

type TContinentListItems = {
  code: string;
  name: string;
};

type TContinentListProps = {
  continentList: TContinentListItems[];
  handleContinentClick: (code: string) => void;
  isLoading: boolean;
};


const ContinentList= ({
  continentList,
  handleContinentClick,
  isLoading
}: TContinentListProps) => {
  return (
    <ul>
      {!isLoading ? (
        continentList?.map((eachContinent: TContinentListItems) => {
          return (
            <li
              className={`list-wrapper ${
                COLORS[Math.floor(Math.random() * COLORS?.length)]
              }
            `}
              key={eachContinent?.code}
              onClick={() => handleContinentClick(eachContinent?.code)}
            >
              <p className="name">{eachContinent?.name}</p>
              <p className="code">{eachContinent?.code}</p>
            </li>
          );
        })
      ) : (
        <Loader />
      )}
    </ul>
  );
};

export default React.memo(ContinentList);