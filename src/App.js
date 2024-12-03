import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursesLeft from "./components/coursesLeft";
import remainingCourses from "./components/remainingCourses";
import Chatbot from "./components/Chatbot";
import "./App.css";

const App = () => {
  return (
    <div style={appContainerStyles}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<CoursesLeft coursesLeft={remainingCourses} />}
          />
        </Routes>
      </Router>

      {/* Chatbot positioned on the lower left */}
      <Chatbot />
    </div>
  );
};

const appContainerStyles = {
  position: "relative", // Ensure relative positioning for the app
  minHeight: "100vh", // Full-page height
  display: "flex",
  flexDirection: "column",
};

export default App;
