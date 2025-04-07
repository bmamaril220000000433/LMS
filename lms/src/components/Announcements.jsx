import React from 'react'
import Logo from '../assets/Kilig_Logo.png';
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

function Announcements() {
  const navigate = useNavigate();

  const announcements = [
    {
      id: 1,
      title: 'Final Examination Schedule',
      content: 'Final examinations will be held from April 15-19, 2025. Please check your individual subject schedules.',
      date: '2025-04-07',
      priority: 'high'
    },
    {
      id: 2,
      title: 'School Foundation Day',
      content: 'Join us in celebrating our school\'s 25th Foundation Day on April 12, 2025. Various activities and performances are planned.',
      date: '2025-04-07',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Library System Maintenance',
      content: 'The library online catalog system will be under maintenance on April 9, 2025, from 2 PM to 5 PM.',
      date: '2025-04-06',
      priority: 'low'
    },
{
      id: 4,
      title: 'sheeeeesh',
      content: 'dasdsadasda.',
      date: '2025-04-06',
      priority: 'high'
    }
    
  ];

  
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-4 border-red-500';
      case 'medium': return 'border-l-4 border-yellow-500';
      case 'low': return 'border-l-4 border-blue-500';
      default: return '';
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

      <div className="pt-12">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">School Announcements</h1>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center bg-red-50 text-red-700 px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5"></div>
                High Priority
              </span>
              <span className="inline-flex items-center bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1.5"></div>
                Medium Priority
              </span>
              <span className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></div>
                Low Priority
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className={`bg-white rounded-lg shadow-sm ${getPriorityStyle(announcement.priority)} hover:shadow transition-all duration-200`}
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
                      <span>Read More</span>
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