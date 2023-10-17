import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <div className="property-title">
          <label htmlFor="title">
            Property Title:{" "}
            <input
              id="title"
              name="title"
              placeholder="Blue Cottage"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="property-city">
          <label htmlFor="city">
            City:{" "}
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Oxford">Oxford</option>
            </select>
          </label>
        </div>
        <div className="property-type">
          <label htmlFor="type">
            Type:{" "}
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="property-bedrooms">
          <label htmlFor="bedrooms">
            Bedrooms:{" "}
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              placeholder="3"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="property-price">
          <label htmlFor="price">
            Price: £
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="500"
              placeholder="250000"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="property-email">
          <label htmlFor="email">
            Email:{" "}
            <input
              id="email"
              name="email"
              type="text"
              placeholder="john.smith@email.com"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
