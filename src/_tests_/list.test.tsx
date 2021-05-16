import React from "react";
import { render } from "@testing-library/react";
import ContinentList from "../components/continentList";

it("continents render", () => {
  const list = [
    {
      code: "AF",
      name: "Africa",
    },
  ];

  const handleContinentClick = () => {};

  const { queryByText } = render(
    <ContinentList
      continentList={list}
      handleContinentClick={handleContinentClick}
      isLoading={false}
    />
    
  );
   const getAfricaElement = queryByText(/africa/i);
   expect(getAfricaElement).toBeInTheDocument();

});
