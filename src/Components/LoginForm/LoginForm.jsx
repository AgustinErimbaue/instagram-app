import React from 'react';
import { useState, useEffect } from 'react';
import "./LoginForm.css";


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePasword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem('isLoggedIn', 'true')
    setUsername('');
    setPassword('');

    onLogin();
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              id="usernamevalue"
              value={username}
              onChange={handleChangeUsername}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChangePasword}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
