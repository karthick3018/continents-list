import React from 'react';
import ContinentIcon from './maps-and-flags.svg';
import {COLORS} from '../../common/helper';
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
            className={`list-wrapper ${(COLORS[Math.floor(
              Math.random() * COLORS?.length)])}
            )}`}
            key={eachContinent?.code}
            onClick={() => handleContinentClick(eachContinent?.code)}
          >
            {/* <figure className="list-figure">
              <img
                src={ContinentIcon}
                alt="continents"
              />
            </figure> */}
            <p className="name">{eachContinent?.name}</p>
            <p className="code">{eachContinent?.code}</p>
          </li>
        );
      })}
    </>
  );
};

export default React.memo(ContinentList);