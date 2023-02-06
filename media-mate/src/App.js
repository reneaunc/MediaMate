import { Routes, Route } from 'react-router-dom';
import './App.css';

import ConsumedMedia from './Screens/ConsumedMedia';
import WantMedia from './Screens/WantMedia';

function App() {
  return (
    <Routes>
      <Route path='consumedmedia' element={<ConsumedMedia/>}/>
      <Route path='wanttoconsume' element={<WantMedia/>}/>
    </Routes>
  );
}

export default App;
