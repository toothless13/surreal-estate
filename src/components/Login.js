import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../config/firebase";
import Alert from "./Alert";
import "../styles/login.css";

const Login = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    signInWithEmailAndPassword(auth, fields.email, fields.password)
      .then((userCredential) => {
        const { user } = userCredential;
        setAlert({
          message: "You have logged in successfully!",
          isSuccess: true,
        });
        console.log("User Logged In");
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setAlert({
          message: errorMessage,
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="login">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">
          Email: <br />
          <br />
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="password">
          Password: <br />
          <br />
          <input
            id="password"
            name="password"
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Login</button>
        <p>
          Need an account? Sign up <Link to="../sign-up">here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
