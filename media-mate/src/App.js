import { Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';

import ConsumedMedia from './Screens/ConsumedMedia';
import WantMedia from './Screens/WantMedia';

function App() {
  return (
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

export default App;
