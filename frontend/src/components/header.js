const Header = ({ studentName }) => (
    <header style={headerStyles}>
      <h1>Degree Planner</h1>
      <p>Welcome, {studentName}</p>
    </header>
  );
  
  const headerStyles = {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center",
  };
  
  export default Header;
  