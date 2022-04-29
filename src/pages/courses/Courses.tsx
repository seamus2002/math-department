import React, { useState } from 'react';
import MathCourses from './MathCourses';
import StatCourses from './StatCourses';


const Courses = () => {
  const [page, setPage] = useState(<MathCourses />);

  return (
    <div>
      <h1 className='page-header'>Courses</h1>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default" onClick={() => {setPage(<MathCourses />)}}>Mathematics</button>
        <button type="button" className="btn btn-default" onClick={() => {setPage(<StatCourses />)}}>Statistics</button>
      </div>
      {page}
    </div>
  );
}

export default Courses;
