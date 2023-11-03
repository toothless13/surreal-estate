import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";
import SideBar from "./SideBar";
import { Context } from "../Context/AuthContext";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const { user } = useContext(Context);

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

  const { search } = useLocation();

  const filterProperties = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/PropertyListing${search}`,
      );
      setProperties(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    filterProperties();
  }, [search]);

  const handleSaveProperty = async (propertyId) => {
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
        await axios.delete(
          `http://localhost:4000/api/v1/Favourite/${favesData[faveId]._id}`,
        );
      } else {
        await axios.post("http://localhost:4000/api/v1/Favourite", {
          propertyListing: propertyId,
          fbUserId: user.uid,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SideBar />
      <div className="property-page-heading">Properties Page</div>
      <div className="property-cards-container">
        {alert && <Alert message={alert.message} />}
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            {...property}
            onSaveProperty={handleSaveProperty}
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
