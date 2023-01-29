import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'

export default class login extends Component {
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
                <div class="container border border-5 border-dark border-top-0 w-25 pb-5 bg-dark text-light shadow-lg">
                    <h2 class="text-center">Log-In</h2>
                    <form onSubmit={this.checkUserInput}>
                        <div class="mb-3 mt-3">
                            <label for="username" class="form-label">User name:</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                        </div>

                        <div class="mb-3">
                            <label for="userPass" class="form-label">Password:</label>
                            <input type="password" class="form-control" id="userPass" placeholder="Enter password" name="userPass" value={this.state.password} onChange={this.handlePasswordChange} />
                        </div>
                        <div class="text-center">

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    <hr />
                    <h3 class="text-center">No account?</h3>
                    <div class="d-flex justify-content-center">

                        <a href="register.php"><button type="button" class="btn btn-primary" id="registration" >Register</button></a>
                    </div>
                </div>
            </div>
        )
    }
}
