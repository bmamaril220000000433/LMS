import React from 'react'
import Logo from '../assets/Kilig_Logo.png';
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

function Subjects() {
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
  
  const subjects = [
    {
      id: 1,
      name: 'Mathematics',
      teacher: 'Dr. Sarah Johnson',
      schedule: 'Monday, Wednesday - 9:00 AM to 10:30 AM',
      room: 'Room 301'
    },
    {
      id: 2,
      name: 'Science',
      teacher: 'Prof. Michael Chen',
      schedule: 'Tuesday, Thursday - 1:00 PM to 2:30 PM',
      room: 'Laboratory 2'
    },
    {
      id: 3,
      name: 'History',
      teacher: 'Ms. Emily Rodriguez',
      schedule: 'Monday, Friday - 11:00 AM to 12:30 PM',
      room: 'Room 205'
    },
    {
      id: 4,
      name: 'Learning',
      teacher: 'Ned Palacios',
      schedule: 'Monday, Friday - 11:00 AM to 12:30 PM',
      room: 'Room 205'
    }
  ];

  return (
    <div className="flex">
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

      <div className="pt-12 h-[calc(100vh-3rem)]">

        <div className="max-w-5xl mx-auto px-6 py-6 h-full">
          <h1 className="text-xl font-bold text-gray-800 mb-6">My Subjects</h1>

          <div className="space-y-3">
            {subjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-lg shadow-sm hover:shadow transition-all duration-200">
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-cyan-50 p-2 rounded-lg">
                          <i className="fas fa-book text-cyan-500"></i>
                        </div>
                        <h2 className="font-semibold text-gray-800 truncate">{subject.name}</h2>
                      </div>
                      <div className="grid sm:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <i className="fas fa-user-tie text-gray-400 w-5"></i>
                          <span className="truncate">{subject.teacher}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <i className="fas fa-clock text-gray-400 w-5"></i>
                          <span className="truncate">{subject.schedule}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <i className="fas fa-door-open text-gray-400 w-5"></i>
                          <span className="truncate">{subject.room}</span>
                        </div>
                      </div>
                    </div>
                    <button className="shrink-0 inline-flex items-center px-4 py-2 bg-cyan-400 text-white text-sm font-medium rounded hover:bg-cyan-500 transition-colors">
                      <span>View Details</span>
                      <i className="fas fa-chevron-right ml-2 text-xs opacity-75"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subjects