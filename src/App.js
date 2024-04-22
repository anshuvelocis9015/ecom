import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSignIn from './components/AdminSignIn';
import UserSignIn from './components/UserSignIn';
import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';

function App() {
  return (
    <Router>
      <div>
        {/* Admin Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/admin">Admin Panel</a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/admin/signin">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* User Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">User Panel</a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/user/signin">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/admin/signin" element={<AdminSignIn />} />
          <Route path="/user/signin" element={<UserSignIn />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/" element={<UserPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
