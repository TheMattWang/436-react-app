import React from "react";
import Reveille from '../assets/rev_funny.jpeg'
const ConfirmationPage = () => {
  return (
    <div style={confirmationContainerStyles}>
      <h1>Congratulations!</h1>
      <p>You submitted your degree planner! Thanks and Gig 'em!</p>
      <img
        src={Reveille} // Replace with your image path
        alt="Reveille"
        style={imageStyles}
      />
    </div>
  );
};

const confirmationContainerStyles = {
  textAlign: "center",
  marginTop: "50px",
  fontFamily: "'Roboto', sans-serif",
  color: "#870000", // Texas A&M maroon
  padding: "20px",
  backgroundColor: "#FAFAFA", // Light gray
  borderRadius: "10px",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
};

const imageStyles = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  marginTop: "20px",
  border: "4px solid #B31E1E",
};

export default ConfirmationPage;
