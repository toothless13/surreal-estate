import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { MemoryRouter } from "react-router-dom";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("renders an error message", () => {
    const { getByText } = render(<Alert message="Error!" />);

    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  it("renders a success message", () => {
    const { getByText } = render(<Alert message="Success!!!" success />);

    expect(getByText(/Success!!!/).textContent).toBe("Success!!!");
  });
});
