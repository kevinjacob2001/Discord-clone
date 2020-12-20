import React, { useEffect } from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import Login from './Components/Login/Login'
import { auth } from "./Components/firebase";

function App() {
  const user=useSelector(selectUser)


  useEffect(()=>{ 
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user is logged in
      }
      else{
        //user is logged out
      }
    })

  },[])

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
