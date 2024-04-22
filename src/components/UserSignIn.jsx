import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserSignIn.css';

function UserSignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        alert('User Sign In');
        navigate('/');
    };

    return (
        // <div className="container mt-5">
        //     <h2>User Sign In</h2>
        //     <form>
        //         <div className="form-group">
        //             <label htmlFor="userUsername">Username</label>
        //             <input type="text" className="form-control" id="userUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="userPassword">Password</label>
        //             <input type="password" className="form-control" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        //         </div>
        //         <button type="button" className="btn btn-primary" onClick={handleSignIn}>Sign In</button>
        //     </form>
        // </div>
        <div className="wrapper">
            <form onSubmit={handleSignIn}>
                <h1>Login</h1>
                <div className="input-box">
                    <input name="email" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default UserSignIn;
