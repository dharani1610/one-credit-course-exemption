import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import the CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dummy authentication logic for demonstration
    if (username === 'admin' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else if (username === 'student' && password === 'student123') {
      navigate('/student-dashboard');
    } else if (username === 'faculty' && password === 'faculty123') {
      navigate('/faculty-dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src="https://2.bp.blogspot.com/-Gnpd2nNJ09A/Uh_yBVbWbDI/AAAAAAAABdg/xGTvtihBGCY/s1600/Bannari.PNG" alt="Logo" className="logo" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
