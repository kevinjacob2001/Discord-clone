import React from 'react';
import { Counter } from './features/Counter';
import './App.css';

import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
     <h1>Discord clone</h1>

     {/* Sidebar */}
     <Sidebar/>
    </div>
  );
}

export default App;
