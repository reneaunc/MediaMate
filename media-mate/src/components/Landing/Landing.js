import React from "react";
import HomeScreen from "../Pages/HomeScreen/HomeScreen";
import './Landing.css';

class Landing extends React.Component {
    render() {
        return (
            <div className="Landing">
                <h1>Welcome to MediaMate!</h1>
                <HomeScreen />
                <h3>A place where friends can explore media together</h3>
            </div>
        )
    }
};

export default Landing;