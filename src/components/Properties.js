import React from "react";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";

const Properties = () => {
  return (
    <>
      <div className="property-page-heading">Properties Page</div>
      <div className="property-cards-container">
        <PropertyCard
          title="title"
          type="Flat"
          bedrooms="3"
          bathrooms="1"
          price="12345"
          city="city"
          email="test@email.com"
        />
      </div>
    </>
  );
};

export default Properties;
