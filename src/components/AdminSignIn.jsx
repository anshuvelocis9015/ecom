import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
function AdminSignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    alert('Admin Sign In');
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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default AdminSignIn;
