import React from 'react';
import './App.css';

import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat'

function App() {
  return (
    <div className="app">
    

     {/* Sidebar */}
     <Sidebar/>

     {/* Chat */}
     <Chat/>
    
    </div>
  );
}

export default App;
