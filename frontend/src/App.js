import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminPage from "./components/AdminPage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [registering, setRegistering] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    // Limpiar el estado de la sesión del usuario
    setLoggedInUser(null);
    setIsAdmin(false);
    // Redirigir al usuario a la página de inicio de sesión
    return <Navigate to="/login" />;
  };

  return (
    <Router>
      <NavBar loggedInUser={loggedInUser} handleLogout={handleLogout} />
      <div className="container mt-5">
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setLoggedInUser={setLoggedInUser}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route
            path="/register"
            element={<Register setRegistering={setRegistering} />}
          />
          <Route
            path="/admin"
            element={isAdmin ? <AdminPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={
              loggedInUser ? (
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
              ) : (
                <div>
                  {registering ? (
                    <Register setRegistering={setRegistering} />
                  ) : (
                    <Login
                      setLoggedInUser={setLoggedInUser}
                      setIsAdmin={setIsAdmin}
                      isAdmin={isAdmin}
                    />
                  )}
                  {!registering && (
                    <button
                      className="btn btn-link"
                      onClick={() => setRegistering(true)}
                    >
                      Crear Cuenta
                    </button>
                  )}
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
