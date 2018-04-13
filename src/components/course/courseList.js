import React from "react";
import CourseListRow from "./courseListRow";

const CoursesList = ({ courses }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <CourseListRow key={course.id} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesList;
