import React from 'react';
import CourseCard from '../../components/CourseCard';
import statCourses from '../../data/stat-courses';

const StatCourses = () => {
    const createCard = (course: any) => {
        return (
            <div className="col d-flex">
                <CourseCard 
                    key = {course.id}
                    id = {course.id}
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
                    {statCourses.map(createCard)}
                </div>  
            </div>
        </div>
    );
}

export default StatCourses;
