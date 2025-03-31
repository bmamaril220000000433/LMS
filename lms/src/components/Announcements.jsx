import React from 'react'
import Logo from '../assets/Kilig_Logo.png';
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

function Announcements() {
  const navigate = useNavigate();

  const home = () => {
    navigate("/dashboard");
  };
  const settings = () => {
    navigate("/settings");
  };
  const logout = () => {
    navigate("/");
  };

  return (
    <div className = 'flex'>
      <div className="bg-cyan-400 absolute top-0 left-0 w-full h-25"></div>
      <div className="absolute top-5 right-5 flex items-center space-x-3 z-10">
      <span className="text-black font-semibold">Hi, Student</span>
      <img src={Logo} alt="Profile" className="h-18 w-20 rounded-full" />
      </div>

      <div className='bg-cyan-400 h-screen p-4 pt-5 z-1'>
        
        <div><img src= {Logo} alt="Logo" className='h-50 w-auto'/></div>
        <div className="card flex justify-center">
          <button className="w-40" onClick={home}>Home</button>
        </div>
        <div className="flex flex-col items-center justify-center pt-150">
        <button className="w-40" onClick={settings}>Settings</button>
        <div className="h-2" /> 
          <button className="w-40" onClick={logout}>Logout
          </button>
        </div>
        </div>
    </div>
  )
}

export default Announcements