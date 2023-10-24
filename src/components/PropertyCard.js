import React from "react";

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
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
      <p className="property-card-city">{city}</p>
      <a href={`mailto:${email}`} className="property-card-email">
        Email
      </a>
    </div>
  );
};

export default PropertyCard;
