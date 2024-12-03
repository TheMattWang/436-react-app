import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from './components/chatbot';
import ConfirmationPage from "./components/confirmPage";

import CoursesLeft from "./components/coursesLeft";
import remainingCourses from "./components/remainingCourses";
import './App.css';

const App = () => {
  return (
    <Router>
      <div style={appStyles}>
        {/* Add the Chatbot here */}
        <Chatbot />

        <Routes>
          <Route
            path="/"
            element={<CoursesLeft coursesLeft={remainingCourses} />}
          />
                  <Route path="/confirmation" element={<ConfirmationPage />} />

        </Routes>
      </div>
    </Router>
  );
};

const appStyles = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
};

export default App;
