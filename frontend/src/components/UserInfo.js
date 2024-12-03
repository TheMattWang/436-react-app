import React from "react";

const UserInfo = ({
  userName,
  graduationDate,
  gpa,
  degreeProgress,
  major,
  degreeType,
}) => {
  return (
    <div style={userInfoContainerStyles}>
      <h1 style={greetingStyles}>Howdy, {userName}!</h1>
      <div style={infoRowStyles}>
        <div style={infoCardStyles}>
          <strong>Major:</strong>
          <span style={infoTextStyles}>{major}</span>
        </div>
        <div style={infoCardStyles}>
          <strong>Degree Type:</strong>
          <span style={infoTextStyles}>{degreeType}</span>
        </div>
        <div style={infoCardStyles}>
          <strong>Expected Graduation:</strong>
          <span style={infoTextStyles}>{graduationDate}</span>
        </div>
        <div style={infoCardStyles}>
          <strong>GPA:</strong>
          <span style={infoTextStyles}>{gpa}</span>
        </div>
        <div style={infoCardStyles}>
          <strong>Degree Progress:</strong>
          <span style={infoTextStyles}>{degreeProgress}%</span>
        </div>
      </div>
    </div>
  );
};

// Updated Styles

const userInfoContainerStyles = {
  backgroundColor: "#B31E1E", // Rich maroon matching the header
  color: "#FFFFFF", // White text for contrast
  padding: "20px",
  borderRadius: "10px", // Rounded corners
  marginBottom: "20px",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Prominent shadow for depth
  textAlign: "center",
};

const greetingStyles = {
  fontSize: "30px",
  marginBottom: "15px",
  fontWeight: "bold",
  color: "#FFFFFF", // White for better readability
};

const infoRowStyles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap", // Adjust layout for smaller screens
  gap: "15px", // Consistent spacing between cards
};

const infoCardStyles = {
  //backgroundColor: "#292929", // Dark gray for contrast
  color: "#FFFFFF", // White text
  padding: "15px 20px",
  borderRadius: "8px", // Rounded corners for modern design
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
  minWidth: "180px", // Ensure consistent card size
  textAlign: "center",
};

const infoTextStyles = {
  display: "block", // Stack text below the label
  fontSize: "18px", // Slightly larger for readability
  marginTop: "5px", // Space between label and value
  fontWeight: "bold",
};

export default UserInfo;
