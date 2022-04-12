import React from 'react';
import CourseCard from '../../components/CourseCard';
import mathCourses from '../../data/math-courses';

const MathCourses = () => {
    const createCard = (course: any) => {
        return (
            <div className="col d-flex">
                <CourseCard 
                    course = {course.course}
                    title = {course.title}
                    description = {course.description}
                    credits = {course.credits}
                    prereqs = {course.prereqs}
                />
            </div>
        );
    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    {mathCourses.map(createCard)}
                </div>  
            </div>
        </div>
    );
}

export default MathCourses;
