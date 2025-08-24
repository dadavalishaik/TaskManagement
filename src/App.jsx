import React from "react";
import LandingPage from "./pages/LandingPage"; // Import LandingPage
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />   {/* Default Landing Page */}
        <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
        <Route path="/signup" element={<Registration />} /> {/* Registration Page */}
      </Routes>
    </Router>
  );
}

export default App;
