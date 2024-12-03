const CourseList = ({ term, courses }) => (
    <div style={courseListStyles}>
      <h2>{term}</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index} style={courseItemStyles}>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
  
  const courseListStyles = {
    margin: "20px 0",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };
  
  const courseItemStyles = {
    padding: "5px 0",
  };
  
  export default CourseList;
  