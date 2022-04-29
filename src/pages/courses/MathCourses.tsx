import React from 'react';
import mathCourses from '../../data/math-courses';

const MathCourses = () => {

    const createCourse = (course: any) => {
        return (
            <div className='courses'>
                <h5>{ course.course }: { course.title }</h5>
                <p>{ course.credits } Credits; { course.semesters }</p>
                <p>{ course.description }</p>
                <p>Prerequisites: { course.prereqs }</p>
            </div>
        );
    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    {mathCourses.map(createCourse)}
                </div>  
            </div>
        </div>
    );
}

export default MathCourses;
