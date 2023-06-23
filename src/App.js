
import './App.css';
import HomePage from './Components/Homepage';
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication logic here (e.g., send a request to a server)

    // For demonstration purposes, let's assume the login is successful if the username is "admin" and the password is "password"
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return <HomePage />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        Username: (username: 'admin')
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password: (password:'password')
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
