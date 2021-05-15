import React from 'react';

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
          <li key={eachContinent?.code}>
            <p onClick={() => handleContinentClick(eachContinent?.code)}>
              {eachContinent?.name} <span>{eachContinent?.code}</span>
            </p>
          </li>
        );
      })}
    </>
  );
};

export default React.memo(ContinentList);