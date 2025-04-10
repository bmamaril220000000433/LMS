import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Kilig_Logo.png';

function Assignments() {
  const navigate = useNavigate();
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
    <div className="h-screen w-screen bg-gray-50 overflow-y-auto">
      <div className="bg-cyan-400 h-12 flex items-center justify-between px-6 shadow-sm fixed w-full top-0 z-10">
        <button onClick={() => navigate('/dashboard')} className="text-white hover:text-gray-100 flex items-center">
          <i className="fas fa-arrow-left mr-2"></i>
          Back
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm">Hi, Student</span>
          <img src={Logo} alt="Profile" className="h-8 w-8 rounded-full" />
        </div>
      </div>

      <div className="pt-12 h-[calc(100vh-3rem)]">
        <div className="max-w-5xl mx-auto px-6 py-6 h-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Assignments</h1>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-100 transition-colors">
                <i className="fas fa-check-circle mr-1.5 opacity-75"></i>
                Assigned
              </button>
              <button className="inline-flex items-center px-3 py-1.5 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full hover:bg-yellow-100 transition-colors">
                <i className="fas fa-clock mr-1.5 opacity-75"></i>
                Due
              </button>
              <button className="inline-flex items-center px-3 py-1.5 bg-red-50 text-red-700 text-xs font-medium rounded-full hover:bg-red-100 transition-colors">
                <i className="fas fa-exclamation-circle mr-1.5 opacity-75"></i>
                Missed
              </button>
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