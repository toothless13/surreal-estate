import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const CreateEmailAccount = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, fields.email, fields.password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="sign-up">
      <form className="sign-up-form" onSubmit={handleSignUp}>
        <label htmlFor="email">
          Email:{" "}
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            id="password"
            name="password"
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default CreateEmailAccount;
