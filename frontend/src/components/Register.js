import React, { useState } from 'react';
import UserService from '../UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


function Register({ setRegistering }) {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        const newUser = { username, password, email };
        UserService.createUser(newUser)
            .then(response => {
                alert('Cuenta creada con éxito');
                setRegistering(false);
            })
            .catch(error => {
                console.error('Error al crear la cuenta:', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Crear Cuenta</h2>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <button className="btn btn-primary" onClick={handleRegister}>Crear Cuenta</button>
<button className="btn btn-secondary mt-2" onClick={() => { setRegistering(false); navigate('/login'); }}>Cancelar</button>
        </div>
    );
}

export default Register;