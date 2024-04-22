import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminSignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Perform admin sign-in logic, e.g., authenticate user
    alert('Admin Sign In');
    // Redirect to admin panel after successful sign-in
    navigate('/admin');
  };

  return (
    <div className="container mt-5">
      <h2>Admin Sign In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="adminUsername">Username</label>
          <input type="text" className="form-control" id="adminUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="adminPassword">Password</label>
          <input type="password" className="form-control" id="adminPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}

export default AdminSignIn;
