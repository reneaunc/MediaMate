import React from 'react';
import './Forms.css';
import { Link } from 'react-router-dom';

function SignupForm() {
    return (
        <div class="card">
            <form>
                <h2 className="title"><Link to="/" title='Home'>Ravenous</Link></h2>
                <p className="or"><span></span></p>

                <div>
                    <h2 className="title"> Sign up</h2>
                </div>

                <div className="email-login">
                    <label htmlFor="email"> <b>Email</b></label>
                    <input type="text" placeholder="name@abc.com" name="uname" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="8+ (a, A, 1, #)" name="psw" required />
                    <label htmlFor="psw"><b>Confirm Password</b></label>
                    <input type="password" placeholder="8+ (a, A, 1, #)" name="psw" required />
                </div>
                <button className="cta-btn">Sign up</button>

                <p className="subtitle">Already have an account? <Link to="/login"> signin</Link></p>
            </form>
        </div>
    );
}

export default SignupForm;

