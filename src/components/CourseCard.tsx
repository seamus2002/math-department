import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = (props: any) => {
  return (
    <div className="card mx-auto">
      <div className="card-body">
        <h5 className="card-title">{props.course}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
        <Link to={`/courses/${props.id}`}><button type='button' className='btn btn-primary'>Learn More</button></Link>
      </div>
    </div>
  );
}

export default CourseCard;
