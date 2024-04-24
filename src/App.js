// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminSignIn from './components/AdminSignIn';
// import UserSignIn from './components/UserSignIn';
// import AdminPanel from './components/AdminPanel';
// import UserPanel from './components/UserPanel';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <div className="container">
//             <a className="navbar-brand" href="/admin">Admin Panel</a>
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="/admin/signin">Sign In</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/admin/signup">Sign Up</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container">
//             <a className="navbar-brand" href="/">User Panel</a>
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="/user/signin">Sign In</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/user/signup">Sign Up</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <Routes>
//           <Route path="/admin/signin" element={<AdminSignIn />} />
//           <Route path="/user/signin" element={<UserSignIn />} />
//           <Route path="/admin" element={<AdminPanel />} />
//           <Route path="/" element={<UserPanel />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminSignIn from './components/AdminSignIn';
// import UserSignIn from './components/UserSignIn';
// import AdminPanel from './components/AdminPanel';
// import UserPanel from './components/UserPanel';

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Top Navigation Bar */}
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <div className="container">
//             <a className="navbar-brand" href="/">E-Commerce</a>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav mr-auto">
//               </ul>
//               <ul className="navbar-nav">
//                 <li className="nav-item dropdown">
//                   {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Sign In
//                   </a> */}
//                   <button className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SignIn</button>
//                   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="/admin/signin">Admin</a>
//                     <a className="dropdown-item" href="/user/signin">User</a>
//                   </div>
//                 </li>
//                 <li className="nav-item">
//                   {/* <a className="nav-link" href="#">Sign Up</a> */}
//                   <button className="nav-link">SignUp</button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/admin/signin" element={<AdminSignIn />} />
//           <Route path="/user/signin" element={<UserSignIn />} />
//           <Route path="/admin" element={<AdminPanel />} />
//           <Route path="/" element={<UserPanel />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminSignIn from './components/AdminSignIn';
import UserSignIn from './components/UserSignIn';
import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';

function App() {
  return (
    <Router>
      <div>
        {/* Top Navigation Bar */}
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">E-Commerce</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sign In
                  </button>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/admin/signin">Admin</Link>
                    <Link className="dropdown-item" to="/user/signin">User</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
   
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <Link className="navbar-brand" to="/">E-Commerce</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">


              <li class="nav-item dropdown">
                <button class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/admin/signin">Admin</Link>
                  <Link className="dropdown-item" to="/user/signin">User</Link>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
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
