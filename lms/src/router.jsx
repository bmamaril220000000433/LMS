import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Announcements from "./components/Announcements.jsx";
import Readmore from "./components/Readmore.jsx";
import Assignments from "./components/Assignments.jsx";
import ViewDetails from "./components/ViewDetails.jsx";
import Subjects from "./components/Subjects.jsx";
import ViewDetailsSubject from "./components/ViewDetailsSubject.jsx";
import Grades from "./components/Grades.jsx";
import Settings from "./components/Settings.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/announcements" element={<Announcements/>} />
      <Route path="/readmore" element={<Readmore/>} />
      <Route path="/assignments" element={<Assignments/>} />
      <Route path="/viewdetails" element={<ViewDetails/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/subjects" element={<Subjects/>} />
      <Route path="/viewdetailssubject" element={<ViewDetailsSubject/>} />
      <Route path="/grades" element={<Grades/>} />
      <Route path="/settings" element={<Settings/>} />
    </Routes>
  );
}

export default Router;