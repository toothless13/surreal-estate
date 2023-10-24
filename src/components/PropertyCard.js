import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBathtub } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
        <FontAwesomeIcon icon={faBed} />
        {bedrooms}
      </p>
      <p className="property-card-bathrooms" data-testid="property-bathrooms">
        <FontAwesomeIcon icon={faBathtub} />
        {bathrooms}
      </p>
      <p className="property-card-price">£{price}</p>
      <p className="property-card-city">{city}</p>
      <a href={`mailto:${email}`} className="property-card-email">
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </a>
    </div>
  );
};

export default PropertyCard;
