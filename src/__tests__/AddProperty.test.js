import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>,
    );

    const headingElement = screen.getByText(/Add Property Page/i);

    expect(headingElement).toBeTruthy();
  });
});
