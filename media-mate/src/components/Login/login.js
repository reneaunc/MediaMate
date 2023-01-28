import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'

export default class login extends Component {
  render() {
    return (
        <div>
            <div class="container border border-5 border-dark border-top-0 w-25 pb-5 bg-dark text-light shadow-lg">
                <h2 class="text-center">Log-In</h2>
                <form method="post" action="signed_in.php">
                    <div class="mb-3 mt-3">
                        <label for="username" class="form-label">User name:</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" />
                    </div>

                    <div class="mb-3">
                        <label for="userPass" class="form-label">Password:</label>
                        <input type="password" class="form-control" id="userPass" placeholder="Enter password" name="userPass" />
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
