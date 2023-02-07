import React from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import PageNotFound from '../Pages/PageNotFound';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';
import ViewYourLibrary from '../Pages/ViewYourLibary';
import CreateReview from '../Pages/CreateReview.js';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Navigation />
          <h1>ravenous</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/yourlib" element={<ViewYourLibrary />} />
            <Route path="/crtrvw" element={<CreateReview />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
    );
  }
}

export default App;
