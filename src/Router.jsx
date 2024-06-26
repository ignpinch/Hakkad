import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./views/About.jsx";
import DashboardContent from "./views/DashboardContent";
import Quiz from "./views/Quiz";
import Leaderboard from "./views/Leaderboard";
import StudentLayout from "./Layout/StudentLayout";
import Contact from "./components/Contact.jsx";

import Quiz1 from "./components/Quiz1.jsx";
import Quiz2 from "./components/Quiz2.jsx";

import Lesson1 from "./components/Lesson1.jsx";
import Lesson2 from "./components/Lesson2.jsx";
import Lesson3 from "./components/Lesson3.jsx";
import EditProfile from "./components/EditProfile.jsx";
import { AuthProvider } from "./Hooks/useAuth.jsx";

const Router = () => (
  <>
    <AuthProvider>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/about" element={<About />} />

        {/* Lessons */}
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/lesson3" element={<Lesson3 />} />

        <Route path="/student" element={<StudentLayout />}>
          <Route path="" element={<DashboardContent />} />
          <Route path="dashboard" element={<DashboardContent />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="leaderboard" element={<Leaderboard />} />

          <Route path="quiz1" element={<Quiz1 />} />
          <Route path="quiz2" element={<Quiz2 />} />
        </Route>
      </Routes>
    </AuthProvider>
  </>
);

export default Router;
