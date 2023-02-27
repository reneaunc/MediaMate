import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";
import './Registration.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App/App.css';
import Landing from '../Landing/Landing';
import LandingNavBar from '../LandingNavBar/LandingNavBar';
import LandingFooter from '../LandingFooter/LandingFooter';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setPasswordAgain] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password, confirmPassword}),
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    // getting user email from response if successful.
                    const { email = '', username = '' } = data.data.User;
                    // setting user to the redux store
                    dispatch(login({ username, email}));
                    //localStorage.setItem('user', JSON.stringify(data.data.user));
                    navigate('/login', { replace: true });
                    console.log(data.message);
                } else {
                    console.error(data.message);
                }
            })
            .catch(err => { })
    };
    
    return (
        <div>
            <Landing/>
            <LandingNavBar />
            <div className="row">
                <div className="col g-0 pe-5" id="panelleft">
                </div>

                <div className="col border border-5 border-dark border-top-0 w-25 pb-5 bg-dark text-light shadow-lg">
                    <h3 className="text-center">Create New Account</h3>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label for="userMail" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="userMail" placeholder="Enter email" name="userMail" onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label for="username" className="form-label">User Name:</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter User Name" name="username" aria-describedby="userNameInfo" onChange={(e) => setUsername(e.target.value)} />
                            <div id="userNameInfo" className="form-text text-light">
                                Your username must at least 3 characters long.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="userPass" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="userPass" placeholder="Enter password" aria-describedby="passwordHelpBlock" name="userPass" onChange={(e) => setPassword(e.target.value)}/>
                            <div id="passwordHelpBlock" className="form-text text-light">
                                Your password must be 4-10 characters long, contain letters and numbers, and must must not contain character ( ) [ ] . { } or emoji.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="passCheck" className="form-label">Password again:</label>
                            <input type="password" className="form-control" id="passCheck" placeholder="Enter password again" name="passCheck" onChange={(e) => setPasswordAgain(e.target.value)}/>
                        </div>


                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    <hr />
                    <div className="d-flex justify-content-center pt-3">
                        <Link to="/login"><button type="button" className="btn btn-primary" id="registration" >Go back to log-in page</button></Link>
                    </div>
                </div>


                <div className="col" id="panelright">
                </div>
            </div>
            <LandingFooter />
        </div>
    )

}

export default Register;
