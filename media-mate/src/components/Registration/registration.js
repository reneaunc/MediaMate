import React, { Component } from 'react';
import './registration.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App/App.css';
import Landing from '../Landing/Landing';
import LandingNavBar from '../LandingNavBar/LandingNavBar';
import LandingFooter from '../LandingFooter/LandingFooter';

export default class Registration extends Component {
    render() {
        return (
            <div>
                <LandingNavBar/>
                <Landing/>
                <div className="row">
                    <div className="col g-0 pe-5" id="panelleft">
                    </div>

                    <div className="col border border-5 border-dark border-top-0 w-25 pb-5 bg-dark text-light shadow-lg">
                        <h3 className="text-center">Create New Account</h3>
                        <hr />
                        <form action="reg_verify.php" method="post">
                            <div className="mb-3 mt-3">
                                <label for="userMail" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="userMail" placeholder="Enter email" name="userMail" />
                            </div>

                            <div className="mb-3">
                                <label for="mailCheck" className="form-label">Email again:</label>
                                <input type="email" className="form-control" id="mailCheck" placeholder="Enter email again" name="mailCheck" />
                            </div>

                            <div className="mb-3">
                                <label for="username" className="form-label">User Name:</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter User Name" name="username" aria-describedby="userNameInfo" />
                                <div id="userNameInfo" className="form-text text-light">
                                    Your username must at least 3 characters long.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="userPass" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="userPass" placeholder="Enter password" aria-describedby="passwordHelpBlock" name="userPass" />
                                <div id="passwordHelpBlock" className="form-text text-light">
                                    Your password must be 4-10 characters long, contain letters and numbers, and must must not contain character ( ) [ ] . { } or emoji.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="passCheck" className="form-label">Password again:</label>
                                <input type="password" className="form-control" id="passCheck" placeholder="Enter password again" name="passCheck" />
                            </div>


                            <div className="d-flex justify-content-center">

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        <hr />
                        <div className="d-flex justify-content-center pt-3">

                            <a href="login.php"><button type="button" className="btn btn-primary" id="registration" >Go back to log-in page</button></a>
                        </div>
                    </div>


                    <div className="col" id="panelright">
                    </div>
                </div>
                <LandingFooter/>
            </div>
        )
    }
}

