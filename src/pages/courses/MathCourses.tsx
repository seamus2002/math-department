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
        <div className='container'>
            <h1 className='page-header'>Undergraduate Mathematics Courses</h1>
            <hr />
            <br />
            {mathCourses.map(createCourse)}
        </div>
    );
}

export default MathCourses;
