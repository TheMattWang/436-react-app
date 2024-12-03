const ProgressBar = ({ progress }) => (
    <div style={progressBarContainer}>
      <div style={{ ...progressBarFill, width: `${progress}%` }}></div>
    </div>
  );
  
  const progressBarContainer = {
    height: "20px",
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
  };
  
  const progressBarFill = {
    height: "100%",
    backgroundColor: "#76c7c0",
  };
  
  export default ProgressBar;
  