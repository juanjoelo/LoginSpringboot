import React, { useState, useEffect } from "react";
import userServiceInstance from "../UserService"; // Asegúrate de que la ruta sea correcta

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userServiceInstance
      .getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios: ", error);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Admin Panel</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
