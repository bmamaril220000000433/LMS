import React from 'react'
import Logo from '../assets/Kilig_Logo.png';
import Logo2 from '../assets/Megaphone.png';
import { useNavigate } from "react-router-dom";
import { Card } from 'primereact/card';
import "../css/Dashboard.css";
import 'primeicons/primeicons.css';

function Dashboard() {
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

      <div className="w-screen bg-gray-50 overflow-y-auto mt-25">
        <div className="p-6">
          <div className="max-w-6xl">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 mr-10">Welcome, Student</h1>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mr-10">
              <Card className="bg-white shadow-sm hover:shadow transition-shadow cursor-pointer overflow-hidden" onClick={() => navigate('/announcements')}>
                <div className="p-4 flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <img src={Logo2} alt="Announcements" className="h-6 w-6"/>
                  </div>
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">Announcements</h2>
                    <p className="text-sm text-gray-600">School updates and notices</p>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </div>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow transition-shadow cursor-pointer overflow-hidden" onClick={() => navigate('/assignments')}>
                <div className="p-4 flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <i className="pi pi-book text-xl text-green-600"></i>
                  </div>
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">Assignments</h2>
                    <p className="text-sm text-gray-600">View and manage your tasks</p>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </div>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow transition-shadow cursor-pointer overflow-hidden" onClick={() => navigate('/subjects')}>
                <div className="p-4 flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="pi pi-graduation-cap text-xl text-green-600"></i>
                  </div>
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">Subjects</h2>
                    <p className="text-sm text-gray-600">Your courses and schedules</p>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </div>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow transition-shadow cursor-pointer overflow-hidden" onClick={() => navigate('/grades')}>
                <div className="p-4 flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="pi pi-bookmark text-xl text-green-600"></i>
                  </div>
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">Grades</h2>
                    <p className="text-sm text-gray-600">View your grades</p>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard