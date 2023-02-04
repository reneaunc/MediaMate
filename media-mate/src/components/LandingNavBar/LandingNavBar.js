import React from "react";
import { Link } from "react-router-dom";
import "./LandingNavBar.css";

function LandingNavBar(){
    return(
            <div>
                <nav>
                    <ul>
                        <li><Link to="/login"><button>Log In</button></Link></li>
                        <li><button>Sign Up</button></li>
                    </ul>
                </nav>
            </div>
    )
}

export default LandingNavBar;