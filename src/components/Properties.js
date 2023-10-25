import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  const getAllProperties = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/PropertyListing/",
      );
      setProperties(data);
    } catch (err) {
      setAlert({ message: "There has been an error, please try again later." });
    }
  };

  // const deleteAllProperties = async (propertyID) => {
  //   try {
  //     const deleted = await axios.delete(
  //       `http://localhost:4000/api/v1/PropertyListing/${propertyID}`,
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    getAllProperties();
  }, []);

  return (
    <>
      <div className="property-page-heading">Properties Page</div>
      <div className="property-cards-container">
        {alert && <Alert message={alert.message} />}
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            title={property.title}
            type={property.type}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            price={property.price}
            city={property.city}
            email={property.email}
          />
        ))}
        {/* {properties.map((property) => {
          deleteAllProperties(property._id);
          return null;
        })} */}
      </div>
    </>
  );
};

export default Properties;
