import React from 'react';
import statCourses from '../../data/stat-courses';

const StatCourses = () => {

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
        <div className='container page'>
            <h1 className='page-header'>Undergraduate Statistics Courses</h1>
            <hr />
            <br />
            {statCourses.map(createCourse)}
        </div>
    );
}

export default StatCourses;
