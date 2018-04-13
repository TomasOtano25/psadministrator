import React from "react";
import { Link } from "react-router-dom";

const CourseListRow = ({ course }) => {
  return (
    <tr>
      <td>
        <a href={course.watchHref}>Wacth</a>
      </td>
      <td>
        <Link to={`/course/${course.id}`}>{course.title}</Link>
      </td>
      <td>{course.author}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

export default CourseListRow;
