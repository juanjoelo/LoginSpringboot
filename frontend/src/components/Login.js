import React, { useState, useEffect } from "react";
import userServiceInstance from "../UserService";
import Register from "./Register";
import { Link } from "react-router-dom";

const Login = ({ setLoggedInUser, setIsAdmin, isAdmin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    userServiceInstance
      .loginUser({ username, password })
      .then((response) => {
        console.log("The response-------->", response);
        console.log("The username-------->", username);
        console.log(
          "The username === administrador-------->",
          username === "administrador"
        );
        console.log("The password-------->", password);
        console.log("The password === password-------->", password === "12345");
        if (username === "administrador" && password === "12345") {
          console.log("Seteo admin true------>");
          setIsAdmin(true);
        } else {
          console.log("Aca?------------->");
          setIsAdmin(false);
        }
        setLoggedInUser(username);
      })
      .catch((error) => {
        setErrorMessage("Error al iniciar sesión: " + error.response.data);
      });
  };

  useEffect(() => {
    console.log("User admin?--------->", isAdmin);
  }, [isAdmin]);

  // Importa Link desde react-router-dom

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Iniciar sesión</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      
      </div>
    </div>
  );
};
export default Login;
