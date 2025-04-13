import React from 'react';
import Logo from '../assets/Kilig_Logo.png';
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Grades() {
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

  // Sample data for the table
  const gradesData = [
    { id: 1, Subject: 'Math', first_Grading: 40, second_Grading: 40, third_Grading: 40, fourth_Grading: 40 },
    { id: 2, Subject: 'Science', first_Grading: 40, second_Grading: 40, third_Grading: 40, fourth_Grading: 40 },
    { id: 3, Subject: 'History', first_Grading: 40, second_Grading: 40, third_Grading: 40, fourth_Grading: 40 },
    { id: 4, Subject: 'English', first_Grading: 40, second_Grading: 40, third_Grading: 40, fourth_Grading: 40 },
  ];

  return (
    <div className='flex'>
      <div className="bg-cyan-400 absolute top-0 left-0 w-full h-25"></div>
      <div className="absolute top-5 right-5 flex items-center space-x-3 z-10">
      <i className="pi pi-arrow-left mr-348 text-3xl text-black cursor-pointer" onClick={() => navigate("/dashboard")}></i>
        <span className="text-black font-semibold">Hi, Student</span>
        <img src={Logo} alt="Profile" className="h-18 w-20 rounded-full" />
      </div>

      <div className='bg-cyan-400 h-screen p-4 pt-5 z-1'>
        <div><img src={Logo} alt="Logo" className='h-50 w-auto' /></div>
        <div className="card flex justify-center">
          <button className="w-40" onClick={home}>Home</button>
        </div>
        <div className="flex flex-col items-center justify-center pt-150">
          <button className="w-40" onClick={settings}>Settings</button>
          <div className="h-2" />
          <button className="w-40" onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="w-screen bg-gray-50 overflow-y-auto mt-25 text-black">
        <div className='mt-20 p-datatable-sm'>
        <DataTable value={gradesData}  tableStyle={{ minWidth: '50rem' }}>
          <Column field="Subject" header="Subject"></Column>
          <Column field="first_Grading" header="First Grading"></Column>
          <Column field="second_Grading" header="Second Grading"></Column>
          <Column field="third_Grading" header="Third Grading"></Column>
          <Column field="fourth_Grading" header="Fourth Grading"></Column>
        </DataTable>
        </div>
      </div>
    </div>
  )
}

export default Grades;
