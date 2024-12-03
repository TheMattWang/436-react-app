import React, { useState } from "react";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";

const CoursesLeft = ({ coursesLeft = [] }) => {
  const [userName, setUserName] = useState("John Doe");
  const [graduationDate, setGraduationDate] = useState("May 2026");
  const [gpa, setGpa] = useState("3.8");
  const [degreeProgress, setDegreeProgress] = useState("0");
  const [major, setMajor] = useState("Computer Science");
  const [degreeType, setDegreeType] = useState("Bachelor of Science");
  const [filteredCoursesLeft, setFilteredCoursesLeft] = useState(coursesLeft);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); // Hover state for the button
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedTerms, setSelectedTerms] = useState(
    coursesLeft.reduce((acc, category) => {
      category.courses.forEach((course) => {
        acc[course.name] = {
          term: course.term || "",
          notes: course.notes || "",
          option: course.options ? course.selectedOption || "" : "",
        };
      });
      return acc;
    }, {})
  );

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const loadedPlan = JSON.parse(e.target.result);

        setUserName(loadedPlan.userName || "John Doe");
        setGraduationDate(loadedPlan.graduationDate || "May 2026");
        setGpa(loadedPlan.gpa || "N/A");
        setDegreeProgress(loadedPlan.degreeProgress || "0");
        setMajor(loadedPlan.major || "Computer Science");
        setDegreeType(loadedPlan.degreeType || "Bachelor of Science");

        const updatedCoursesLeft = coursesLeft.map((category) => ({
          ...category,
          courses: category.courses.filter(
            (course) => !loadedPlan.selectedTerms[course.name]?.done
          ),
        }));

        setFilteredCoursesLeft(updatedCoursesLeft);
        setSelectedTerms(loadedPlan.selectedTerms || {});
      } catch (error) {
        alert("Error loading degree plan. Please upload a valid JSON file.");
      }
    };

    reader.readAsText(file);
  };

  const handleSubmit = () => {
    // Organize the courses by semester
    const plannedCourses = Object.entries(selectedTerms).reduce((acc, [courseName, details]) => {
      if (!details.term) return acc; // Skip if no term is selected
      if (!acc[details.term]) {
        acc[details.term] = [];
      }
      acc[details.term].push({
        courseName,
        notes: details.notes,
        option: details.option,
      });
      return acc;
    }, {});

    // Prepare the JSON object
    const degreePlan = {
      userName,
      graduationDate,
      gpa,
      degreeProgress,
      major,
      degreeType,
      plannedCourses,
    };

    // Save the JSON file
    const blob = new Blob([JSON.stringify(degreePlan, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "degree_plan.json";
    link.click();

    // Navigate to the confirmation page
    navigate("/confirmation");
  };

  return (
    <div style={appContainerStyles}>
      <div style={headerStyles}>Texas A&M Degree Plan</div>

      <UserInfo
        userName={userName}
        graduationDate={graduationDate}
        gpa={gpa}
        degreeProgress={degreeProgress}
        major={major}
        degreeType={degreeType}
      />

      <div style={fileUploadContainerStyles}>
        <label style={fileUploadLabelStyles}>
          Load Degree Plan:
          <input
            type="file"
            accept=".json"
            onChange={handleFileUpload}
            style={fileInputStyles}
          />
        </label>
      </div>

      <div style={containerStyles}>
        {filteredCoursesLeft.map((category) => (
          <div key={category.category} style={categoryCardStyles}>
            <h2 style={categoryTitleStyles}>{category.category}</h2>
            {category.courses.map((course) => (
              <div key={course.name} style={courseRowStyles}>
                <span style={courseNameStyles}>
                  {course.name} {course.options && "(Elective)"}
                </span>
                <div style={selectGroupStyles}>
                  {course.name.toLowerCase().includes("emphasis") ? (
                    <input
                      type="text"
                      placeholder="Enter emphasis area course"
                      value={selectedTerms[course.name]?.emphasisCourse || ""}
                      onChange={(e) =>
                        setSelectedTerms((prev) => ({
                          ...prev,
                          [course.name]: {
                            ...prev[course.name],
                            emphasisCourse: e.target.value,
                          },
                        }))
                      }
                      style={textInputStyles}
                    />
                  ) : course.options ? (
                    <select
                      value={selectedTerms[course.name]?.option || ""}
                      onChange={(e) =>
                        setSelectedTerms((prev) => ({
                          ...prev,
                          [course.name]: {
                            ...prev[course.name],
                            option: e.target.value,
                          },
                        }))
                      }
                      style={selectStyles}
                    >
                      <option value="">Select Course</option>
                      {course.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : null}
                  <select
                    value={selectedTerms[course.name]?.term || ""}
                    onChange={(e) =>
                      setSelectedTerms((prev) => ({
                        ...prev,
                        [course.name]: {
                          ...prev[course.name],
                          term: e.target.value,
                        },
                      }))
                    }
                    style={selectStyles}
                  >
                    <option value="">Select Term</option>
                    <option value="Fall 2024">Fall 2024</option>
                    <option value="Spring 2025">Spring 2025</option>
                    <option value="Fall 2025">Fall 2025</option>
                    <option value="Spring 2026">Spring 2026</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Add notes here"
                    value={selectedTerms[course.name]?.notes || ""}
                    onChange={(e) =>
                      setSelectedTerms((prev) => ({
                        ...prev,
                        [course.name]: {
                          ...prev[course.name],
                          notes: e.target.value,
                        },
                      }))
                    }
                    style={notesInputStyles}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        style={{
          ...submitButtonStyles,
          backgroundColor: isHovered ? "green" : submitButtonStyles.backgroundColor,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        Submit
      </button>

      {isModalOpen && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <h2>Are you sure you want to submit your degree plan?</h2>
            <button style={confirmButtonStyles} onClick={handleSubmit}>
              Yes, Submit
            </button>
            <button
              style={cancelButtonStyles}
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



// Styles
const appContainerStyles = {
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: "#FAFAFA",
  minHeight: "100vh",
  padding: "20px",
};

const headerStyles = {
  backgroundColor: "#B31E1E",
  color: "#FFFFFF",
  textAlign: "center",
  padding: "20px",
  fontSize: "30px",
  fontWeight: "bold",
  borderRadius: "10px",
  marginBottom: "20px",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
};

const fileUploadContainerStyles = {
  textAlign: "center",
  marginBottom: "20px",
};

const fileUploadLabelStyles = {
  fontSize: "16px",
  color: "#333333",
  display: "inline-block",
  marginBottom: "10px",
};

const fileInputStyles = {
  marginLeft: "10px",
};

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const categoryCardStyles = {
  backgroundColor: "#FFFFFF",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  border: "1px solid #B31E1E",
};

const categoryTitleStyles = {
  fontSize: "22px",
  color: "#7B0000",
  marginBottom: "15px",
  borderBottom: "3px solid #B31E1E",
  paddingBottom: "5px",
};

const courseRowStyles = {
  display: "flex",
  flexDirection: "row", // Arrange items in a row
  flexWrap: "wrap", // Ensure items wrap within their container
  gap: "12px",
  marginBottom: "15px",
  alignItems: "flex-start", // Align inputs to the top
};


const courseNameStyles = {
  fontSize: "16px",
  color: "#333333",
  marginBottom: "5px",
};

const selectGroupStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap", // Wrap elements to prevent overflow
  gap: "10px",
  alignItems: "flex-start",
};

const selectStyles = {
  flex: 1,
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #CCCCCC",
  backgroundColor: "#FFFFFF",
  color: "#333333",
  maxWidth: "160px", // Limit width
  minWidth: "120px", // Maintain readability
};

const textInputStyles = {
  flex: 1,
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #CCCCCC",
  backgroundColor: "#FFFFFF",
  color: "#333333",
  maxWidth: "200px", // Limit width
};


const notesInputStyles = {
  flex: 2,
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #CCCCCC",
  backgroundColor: "#FFFFFF",
  color: "#333333",
  minWidth: "200px",
  maxHeight: "60px", // Set a maximum height to prevent overflow
  overflow: "auto", // Allow scrolling if content exceeds the maximum height
  resize: "vertical", // Optional: Allow the user to resize the input box vertically
};


const submitButtonStyles = {
  display: "block",
  margin: "20px auto",
  padding: "12px 25px",
  backgroundColor: "#B31E1E",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "8px",
  fontSize: "18px",
  cursor: "pointer",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  transition: "background-color 0.3s",
};

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyles = {
  backgroundColor: "#FFFFFF",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  width: "90%",
  maxWidth: "400px",
  fontFamily: "'Roboto', sans-serif",
};

const confirmButtonStyles = {
  backgroundColor: "#B31E1E",
  color: "#FFFFFF",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  margin: "10px",
};

const cancelButtonStyles = {
  backgroundColor: "#FFFFFF",
  color: "#B31E1E",
  padding: "10px 20px",
  border: "2px solid #B31E1E",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  margin: "10px",
};

export default CoursesLeft;
