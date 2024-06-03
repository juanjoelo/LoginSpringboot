import React from "react";
import { Link } from "react-router-dom";

const UserHome = ({ loggedInUser, isAdmin, handleLogout }) => {
  return (
    <div>
      <h1>Sesión Iniciada</h1>
      <p className="welcome-message">Bienvenido {loggedInUser}</p>
      {isAdmin && (
        <Link to="/admin" className="btn btn-primary">
          Administrar Usuarios
        </Link>
      )}
      <button className="btn btn-link" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default UserHome;
