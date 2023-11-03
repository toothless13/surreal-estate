import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBathtub, faStar } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "../styles/property-card.css";
import axios from "axios";
import { Context } from "../Context/AuthContext";

// rafce gives React boilerplate

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
  _id,
  onSaveProperty,
}) => {
  const { user } = useContext(Context);
  const [isFave, setIsFave] = useState();

  const handleFaveProperty = async (propertyId) => {
    try {
      const { data: favesData } = await axios.get(
        "http://localhost:4000/api/v1/Favourite",
      );
      const favesPropertyIds = favesData.map(
        (faveData) => faveData.propertyListing,
      );
      if (favesPropertyIds.includes(propertyId)) {
        const faveId = favesPropertyIds.findIndex(
          (faveDataId) => faveDataId === propertyId,
        );
        console.log("Not saved");
        setIsFave(false);
      } else {
        console.log("Saved");
        setIsFave(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFaveClick = () => {
    onSaveProperty(_id);
    handleFaveProperty(_id);
  };

  return (
    <div className="property-card">
      <h3 className="property-card-title">{title}</h3>
      <p className="property-card-type-location">
        {type} - {city}
      </p>
      <p className="property-card-bedrooms" data-testid="property-bedrooms">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </p>
      <p className="property-card-bathrooms" data-testid="property-bathrooms">
        <FontAwesomeIcon icon={faBathtub} /> {bathrooms}
      </p>
      <p className="property-card-price">£{price}</p>
      <a href={`mailto:${email}`} className="property-card-email">
        <FontAwesomeIcon icon={faEnvelope} /> Email
      </a>
      {user && (
        <button
          type="button"
          className="save-property"
          onClick={handleFaveClick}
        >
          {/* <FontAwesomeIcon icon={faStar} /> */}
          {isFave ? (
            <FontAwesomeIcon className="saved-star" icon={faStar} />
          ) : (
            <FontAwesomeIcon className="not-saved-star" icon={faStar} />
          )}
        </button>
      )}
    </div>
  );
};

export default PropertyCard;
