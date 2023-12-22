import React from 'react';
import '../styles/Navbar.css'
import {useNavigate} from "react-router-dom"


export default function Navbar() {
  const navigate = useNavigate();

 const userData = JSON.parse(localStorage.getItem('userData')|| 'null');  
 const handelLogout =() => {
    localStorage.removeItem('userData');
    navigate("/")
  }
  return (
    <div className="nav-bar">
        <img className="logo"
        src="https://media.giphy.com/media/gfwGJdXuj08X4YcRQu/giphy.gif"
        alt="Logo"></img>
        {userData? (
          <>
         <h3 className="text">Welcome Back {userData.firstnamez}</h3>
         
         
         <button className="logout" onClick={handelLogout}>logout</button>
        </>
        ): (
         <h3 className="text">Welcome</h3>
       )}
    </div>
  )
}
