import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import DashboardContent from "./views/DashboardContent";
import Quiz from "./views/Quiz";
import Leaderboard from "./views/Leaderboard";
import StudentLayout from "./Layout/StudentLayout";
import Contact from "./components/Contact.jsx";
import Quiz1 from "./components/Quiz1.jsx";
import Quiz2 from "./components/Quiz2.jsx";

const Router = () => (
  <>
    <Routes>
      <Route path="*" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<LandingPage />} />
      <Route path="/LoginPage" element={<Login />} />
      <Route path="/SignUpPage" element={<Register />} />
      <Route path="/Contact" element={<Contact />} />

      <Route path="/Student" element={<StudentLayout />}>
        <Route path="" element={<Navigate to="/Student/Dashboard" />} />
        <Route path="Dashboard" element={<DashboardContent />} />
        <Route path="Quiz" element={<Quiz />} />
        <Route path="Leaderboard" element={<Leaderboard />} />

        <Route path="Quiz1" element={<Quiz1 />} />
        <Route path="Quiz2" element={<Quiz2 />} />
      </Route>
    </Routes>
  </>
);

export default Router;
