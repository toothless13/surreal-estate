import React from "react";

const PropertyCard = ({ title, type, bedrooms, bathrooms, price }) => {
  return (
    <div className="property-card">
      <p className="property-card-title">{title}</p>
      <p className="property-card-type">{type}</p>
      <p className="property-card-bedrooms" data-testid="property-bedrooms">
        {bedrooms}
      </p>
      <p className="property-card-bathrooms" data-testid="property-bathrooms">
        {bathrooms}
      </p>
      <p className="property-card-price">{price}</p>
    </div>
  );
};

export default PropertyCard;
