import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import { Context } from "../Context/AuthContext";

const SavedProperties = () => {
  const [properties, setProperties] = useState([]);
  const { user } = useContext(Context);

  const getFaveProperties = async () => {
    try {
      const { data: allFaveData } = await axios.get(
        "http://localhost:4000/api/v1/Favourite",
      );
      const { data: propertiesData } = await axios.get(
        "http://localhost:4000/api/v1/PropertyListing/",
      );
      const userFaveData = allFaveData.filter((faveData) => {
        return faveData.fbUserId === user.uid;
      });
      const userFaveProperties = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < userFaveData.length; i++) {
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < propertiesData.length; j++) {
          if (propertiesData[j]._id === userFaveData[i].propertyListing) {
            userFaveProperties.push(propertiesData[j]);
          }
        }
      }
      setProperties(userFaveProperties);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFaveProperties();
  }, []);

  return (
    <>
      <div className="property-page-heading">Saved Properties</div>
      <div className="property-cards-container">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
    </>
  );
};

export default SavedProperties;
