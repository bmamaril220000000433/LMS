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

    const readmore = () => {
      navigate("/readmore");
    };


  const announcements = [
    {
      id: 1,
      title: 'Final Examination Schedule',
      content: 'Final examinations will be held from April 15-19, 2025. Please check your individual subject schedules.',
      date: '2025-04-07',
    },
    {
      id: 2,
      title: 'School Foundation Day',
      content: 'Join us in celebrating our school\'s 25th Foundation Day on April 12, 2025. Various activities and performances are planned.',
      date: '2025-04-07',
    },
    {
      id: 3,
      title: 'Library System Maintenance',
      content: 'The library online catalog system will be under maintenance on April 9, 2025, from 2 PM to 5 PM.',
      date: '2025-04-06',
    },
{
      id: 4,
      title: 'sheeeeesh',
      content: 'dasdsadasda.',
      date: '2025-04-06',
    }
    
  ];


  return (
        <div className="flex">
          <div className="bg-cyan-400 absolute top-0 left-0 w-full h-25"></div>
          <div className="absolute top-5 right-5 flex items-center space-x-3 z-10">
            <i className="pi pi-arrow-left mr-348 text-3xl text-black cursor-pointer" onClick={() => navigate("/dashboard")}></i>
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
      <div className="w-screen bg-gray-50 pt-12">
        <div className="max-w-5xl px-6 py-6 mt-15">

          <div className="space-y-3">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className={`bg-white rounded-lg shadow-sm hover:shadow transition-all duration-200`}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="font-semibold text-gray-800 truncate pr-4">{announcement.title}</h2>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{announcement.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{announcement.content}</p>
                    </div>
                    <button className="shrink-0 inline-flex items-center px-4 py-2 bg-cyan-400 text-white text-sm font-medium rounded hover:bg-cyan-500 transition-colors">
                      <span onClick={readmore}>Read More</span>
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

export default Announcements