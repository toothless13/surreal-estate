import React from "react";
import { render, screen } from "@testing-library/react";
// import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Test Title",
    type: "Test Type",
    bedrooms: 3,
    bathrooms: 1,
    price: 12345,
    city: "Test City",
    email: "test@email.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct value for title prop", () => {
    const component = render(<PropertyCard title={validProps.title} />);

    expect(component.getByText(/Test Title/i)).toBeTruthy();
    expect(component.getByText(/Test Title/i)).toBeInTheDocument();
  });

  it("renders correct value for type prop", () => {
    const component = render(<PropertyCard type={validProps.type} />);

    expect(component.getByText(/Test Type/i)).toBeTruthy();
    expect(component.getByText(/Test Type/i)).toBeInTheDocument();
  });

  it("renders correct value for bedrooms prop", () => {
    const { getByTestId } = render(
      <PropertyCard bedrooms={validProps.bedrooms} />,
    );

    expect(getByTestId("property-bedrooms")).toBeTruthy();
    expect(getByTestId("property-bathrooms")).toBeInTheDocument();
  });

  it("renders correct value for bathrooms prop", () => {
    const { getByTestId } = render(
      <PropertyCard bathrooms={validProps.bathrooms} />,
    );

    expect(getByTestId("property-bathrooms")).toBeTruthy();
  });

  it("renders correct value for price prop", () => {
    const component = render(<PropertyCard price={validProps.price} />);

    expect(component.getByText(/12345/i)).toBeTruthy();
    expect(component.getByText(/12345/i)).toBeInTheDocument();
  });
});
