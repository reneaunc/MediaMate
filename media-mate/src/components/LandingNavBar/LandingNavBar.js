import React from "react";
import { Link } from "react-router-dom";
import "./LandingNavBar.css";

function LandingNavBar(){
    return(
            <div>
                <nav>
                    <ul>
                        <li><Link to="/login"><button>Log In</button></Link></li>
                        <li><Link to="/signup"><button>Sign Up</button></Link></li>
                        <li><Link to="/feed"><button>Feed</button></Link></li>
                        <li><Link to="/library"><button>Library</button></Link></li>
                        <li><Link to="/browse"><button>Browse</button></Link></li>
                    </ul>
                </nav>
            </div>
    )
}

export default LandingNavBar;