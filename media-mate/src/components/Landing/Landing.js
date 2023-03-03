import React from "react";
import HomeScreen from "../Pages/HomeScreen/HomeScreen";
import './Landing.css';
import HomeScreen from '../Pages/HomeScreen/HomeScreen';
import LandingFooter from '../LandingFooter/LandingFooter';

class Landing extends React.Component {
    render() {
        return (
            <div className="Landing">
                <h1>Welcome to MediaMate!</h1>
                <HomeScreen />
                <h3>A place where friends can explore media together</h3>
                <HomeScreen />
                <LandingFooter />
            </div>
            
        )
    }
};

export default Landing;