import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Announcements from "./components/Announcements.jsx";
import Assignments from "./components/Assignments.jsx";
import Subjects from "./components/Subjects.jsx";
import Settings from "./components/Settings.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default Router;