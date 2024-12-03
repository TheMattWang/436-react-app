import React, { useState } from "react";

const AddClasses = ({ courses, setCourses }) => {
  const [term, setTerm] = useState("");
  const [newCourse, setNewCourse] = useState("");

  const handleAddCourse = () => {
    if (!term || !newCourse) return alert("Please fill in all fields.");
    setCourses((prevCourses) => ({
      ...prevCourses,
      [term]: [...(prevCourses[term] || []), newCourse],
    }));
    setTerm("");
    setNewCourse("");
  };

  return (
    <div>
      <h2>Add Classes</h2>
      <div style={formStyles}>
        <label>
          Term:
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="e.g., Fall 2024"
            style={inputStyles}
          />
        </label>
        <label>
          Course:
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="e.g., Math 101"
            style={inputStyles}
          />
        </label>
        <button onClick={handleAddCourse} style={buttonStyles}>
          Add Course
        </button>
      </div>
      
    </div>
  );
};

const formStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "20px",
};

const inputStyles = {
  padding: "8px",
  margin: "5px 0",
  border: "1px solid #ddd",
  borderRadius: "4px",
  width: "100%",
};

const buttonStyles = {
  padding: "10px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const confirmButtonStyles = {
  backgroundColor: "#D11F1F",
  color: "#FFFFFF",
  padding: "12px 25px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const cancelButtonStyles = {
  backgroundColor: "#FFFFFF",
  color: "#D11F1F",
  padding: "12px 25px",
  border: "2px solid #D11F1F",
  borderRadius: "6px",
  cursor: "pointer",
};

const submitButtonStyles = {
  display: "block",
  margin: "20px auto",
  padding: "12px 25px",
  backgroundColor: "#7B0000",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "6px",
  fontSize: "18px",
  cursor: "pointer",
};


export default AddClasses;
