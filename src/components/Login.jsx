// src/components/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Call your API here
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      setMessage('Login successful');
      navigate('/video/1'); // or wherever you want to go
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div align="center">
      <div className="card">
        <h1>Login or Register</h1>
        <form onSubmit={handleLogin}>
          <div><label>Email:</label></div>
          <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div><br />
          <div><label>Password:</label></div>
          <div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div><br />
          <div>
            <button className="button-index" type="submit">login</button>
          </div>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}
