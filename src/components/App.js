import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import CreateEmailAccount from "./CreateEmailAccount";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />
        <Route path="sign-up" element={<CreateEmailAccount />} />
      </Routes>
    </div>
  );
};

export default App;
