import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";
import './../App/App.css';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== "" && password !== "") {
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'success') {
                        const { email = '', username = ''} = data.data.user;
                        const userObj = {email:data.data.user.email, username: data.data.user.username, consume: data.data.user.consume, wishlist: data.data.user.wishlist}

                        dispatch(login({username, email}));
                        localStorage.setItem('user', JSON.stringify(userObj));
                        navigate("/profile", { replace: true });
                        console.log(data.message);
                    } else {
                        console.error(data.message);
                        alert(data.message);
                    }
                })
                .catch(err => {})
        }
        else {
            alert("Incorrect username or password");
        }
    }


    return (
        <div>
            <div>
                <div className="row">
                    <div className="col g-0 pe-5" id="panelleft">
                    </div>

                    <div className="col border border-5 border-dark border-top-0 pb-5 bg-dark text-light shadow-lg">
                        <h2 className="text-center">Log-In</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 mt-3">
                                <label for="username" className="form-label">User name:</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" onChange={(e) => setUsername(e.target.value)}/>
                            </div>

                            <div className="mb-3">
                                <label for="userPass" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="userPass" placeholder="Enter password" name="userPass" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="text-center">

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        <hr />
                        <h3 className="text-center">No account?</h3>
                        <div className="d-flex justify-content-center">

                            <Link to="/signup"><button type="button" className="btn btn-primary" id="registration" >Register</button></Link>
                        </div>
                    </div>


                    <div className="col" id="panelright">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
