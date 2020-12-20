import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import Login from './Components/Login/Login'

function App() {
  const user=useSelector(selectUser)
  return (
    <div className="app">
     
      {user?(
        <>
        <Sidebar />
        <Chat />
        </>):(<Login/>)
      }

    </div>
  ); 
}

export default App;
