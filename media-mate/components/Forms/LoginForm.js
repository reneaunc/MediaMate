import React from 'react';
import './Forms.css';
import { Link } from 'react-router-dom';


function LoginForm() {
    return (
        <>
            <div className="card">
                <form>
                    <h2 className="title"><Link to="/" title='Home'>Ravenous</Link></h2>
                    <p className="or"><span></span></p>
                    <div>
                        <h2 className="title"> Login</h2>
                    </div>
                    <div className="email-login">
                        <label htmlFor="email"> <b>Email</b></label>
                        <input type="text" placeholder="name@abc.com" name="uname" required />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="8+ (a, A, 1, #)" name="psw" required />
                    </div>
                    <button className="cta-btn">Login</button>
                    <Link className="forget-pass" to="/signup">Create an Account</Link>
                </form>
            </div>
        </>
    );

}

export default LoginForm;