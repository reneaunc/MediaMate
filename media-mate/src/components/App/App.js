import logo from '../../logo.svg';
import React from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import LandingNavBar from '../LandingNavBar/LandingNavBar';
import LandingFooter from '../LandingFooter/LandingFooter';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <LandingNavBar />
        <Landing />
        <LandingFooter />
      </div>
    );
  } 
}

export default App;
