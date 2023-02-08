import React from "react";
import './Navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render () {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/login" ><button>Log In</button></Link></li>
                        <li><Link to="/signup"><button>Sign Up</button></Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;