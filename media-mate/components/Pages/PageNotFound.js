import React from "react";
import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => (

    <div className="PageNotFound">
        <div className="scene">
            <div className="text">404</div>
            <div className="text">Page Not Found!</div>

            <br />
            <br />
            <br />
            <Link class="cta-btn" to="/">Go to Home</Link>
        </div>
    </div>
);
export default PageNotFound;