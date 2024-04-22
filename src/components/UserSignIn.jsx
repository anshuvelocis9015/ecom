import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserSignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Perform user sign-in logic, e.g., authenticate user
    alert('User Sign In');
    // Redirect to user panel after successful sign-in
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>User Sign In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="userUsername">Username</label>
          <input type="text" className="form-control" id="userUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Password</label>
          <input type="password" className="form-control" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}

export default UserSignIn;
