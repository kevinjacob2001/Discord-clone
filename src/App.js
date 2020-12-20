import React from "react";
import "./App.css";

import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


function App() {
  const user=useSelector(selectUser)
  return (
    <div className="app">
      {user?(
        <>
        <Sidebar />

      <Chat />
        </>
      ):(
<h2>You need to login</h2>
      )}
    </div>
  ); 
}

export default App;
