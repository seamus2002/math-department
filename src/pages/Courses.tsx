import React, { useState } from 'react';
import MathCourses from './subpages/MathCourses';
import StatCourses from './subpages/StatCourses';

const Courses = () => {
  const [page, setPage] = useState(<MathCourses />);

  return (
    <div>
      <h1>Courses</h1>
      <button type="button" className="btn btn-info faculty-btn" onClick={() => {setPage(<MathCourses />)}}>Mathematics</button>
      <button type="button" className="btn btn-info faculty-btn" onClick={() => {setPage(<StatCourses />)}}>Statistics</button>
      {page}
    </div>
  );
}

export default Courses;
