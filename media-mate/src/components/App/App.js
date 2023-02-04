import React from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import LandingNavBar from '../LandingNavBar/LandingNavBar';
import LandingFooter from '../LandingFooter/LandingFooter';
import Login from '../Login/Login';
import MediaInfo from "../Pages/MediaInfo/MediaInfo";
import { Route, Routes } from 'react-router-dom';



class App extends React.Component {
  render() {
    return(
      <div className="App">
        <LandingNavBar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <MediaInfo />
        <LandingFooter />
      </div>
    );
  } 
}

export default App;
