import React from "react";
import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import ContinentDetails from "../components/continentDetails";

it("continent details render", async () => {
  const details = {
    code: "AF",
    name: "Africa",
    countries: [
      {
        capital: "Luanda",
        code: "AO",
        currency: "AOA",
      },
    ],
  };

  const handleModalClose = () => {};

  render(
    <ContinentDetails
      isLoading={false}
      isModalOpen={true}
      onModalClose={handleModalClose}
      details={details}
    />
  );

  await waitFor(() => expect(screen.getByText("Africa")).toBeVisible()); 
});
