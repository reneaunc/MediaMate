import React from "react";
import './PageNotFound.css';

class PageNotFound extends React.Component {
    render() {
        return (
            <div className="PageNotFound">
                <img src="../../../../sadBoi.png" alt=''/>
                <h1>
                    Sorry, we can't find that page
                </h1>
            </div>
        )
    }
};

export default PageNotFound;
