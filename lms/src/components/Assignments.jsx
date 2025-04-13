import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Kilig_Logo.png';

function Assignments() {
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
  const [assignments] = useState([
    {
      id: 1,
      title: 'Mathematics Homework',
      subject: 'Mathematics',
      dueDate: '2025-04-14',
      status: 'assigned'
    },
    {
      id: 2,
      title: 'Science Project',
      subject: 'Science',
      dueDate: '2025-04-10',
      status: 'due'
    },
    {
      id: 3,
      title: 'History Essay',
      subject: 'History',
      dueDate: '2025-04-05',
      status: 'missed'
    },
    {
      id: 4,
      title: 'gwenchana',
      subject: 'History',
      dueDate: '2025-04-05',
      status: 'missed'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'assigned': return 'bg-blue-100 text-blue-800';
      case 'due': return 'bg-yellow-100 text-yellow-800';
      case 'missed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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

      <div className="w-screen pt-12 mt-20 bg-gray-50">
        <div className="max-w-5xl px-6 py-6 h-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Assignments</h1>
            <div className="flex flex-wrap gap-2">
              <p className="inline-flex items-center px-3 py-1.5 text-blue-700 text-xs font-medium rounded-full bg-blue-100">
                Assigned
              </p>
              <p className="inline-flex items-center px-3 py-1.5 text-yellow-700 text-xs font-medium rounded-full bg-yellow-100">
                Due
              </p>
              <p className="inline-flex items-center px-3 py-1.5 text-red-700 text-xs font-medium rounded-full bg-red-100">
                Missed
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {assignments.map((assignment) => (
              <div key={assignment.id} className="bg-white rounded-lg shadow-sm hover:shadow transition-all duration-200">
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="font-semibold text-gray-800 truncate pr-4">{assignment.title}</h2>
                        <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                          {assignment.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <i className="fas fa-book text-gray-400 w-5"></i>
                          <span className="truncate">{assignment.subject}</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-calendar text-gray-400 w-5"></i>
                          <span className="truncate">{assignment.dueDate}</span>
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
  );
}

export default Assignments;