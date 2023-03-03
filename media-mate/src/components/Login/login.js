import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './../App/App.css';
import './Login.css';
import LandingNavBar from '../LandingNavBar/LandingNavBar';
import LandingFooter from '../LandingFooter/LandingFooter';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    checkUserInput = (event) => {
        //alert(`${this.state.username} ${this.state.password}`);
        if(this.state.username !== 'guest' || this.state.password !== 'guest') {
            alert('Incorrect password or username');
        } else {
            alert('Correct info input');
        }
    }

    render() {
        return (
            <div>
                <LandingNavBar/>
                <div>
                    <div className="row">
                        <div className="col g-0 pe-5" id="panelleft">
                        </div>
                        
                        <div className="col border border-5 border-dark border-top-0 pb-5 bg-dark text-light shadow-lg">
                            <h2 className="text-center">Log-In</h2>
                            <form onSubmit={this.checkUserInput}>
                                <div className="mb-3 mt-3">
                                    <label for="username" className="form-label">User name:</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                                </div>

                                <div className="mb-3">
                                    <label for="userPass" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="userPass" placeholder="Enter password" name="userPass" value={this.state.password} onChange={this.handlePasswordChange} />
                                </div>
                                <div className="text-center">

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                            <hr />
                            <h3 className="text-center">No account?</h3>
                            <div className="d-flex justify-content-center"> 
                                
                                <a href="register.php"><button type="button" className="btn btn-primary" id="registration" >Register</button></a>
                            </div>
                        </div>
                        
                        
                        <div className="col" id="panelright">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
