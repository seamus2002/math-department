import React from 'react';
import CourseCard from '../../components/CourseCard';
import statCourses from '../../data/stat-courses';

const StatCourses = () => {
    const createCard = (course: any) => {
        return (
            <div className="col d-flex">
                <CourseCard 
                    course = {course.course}
                    title = {course.title}
                    description = {course.description}
                    credits = {course.credits}
                />
            </div>
        );
    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    {statCourses.map(createCard)}
                </div>  
            </div>
        </div>
    );
}

export default StatCourses;
