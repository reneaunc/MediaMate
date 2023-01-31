import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { ConsumedMedia } from './Screens';

function App() {
  return (
    <Routes>
      <Route path='consumedmedia' element={<ConsumedMedia/>}/>
    </Routes>
  );
}

export default App;
