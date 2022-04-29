import React, { useState, useEffect } from 'react';
import CourseCard from '../../components/CourseCard';

const StatCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/stat-courses')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setCourses(data);
            })
    }, [])

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
                    {courses.map(createCard)}
                </div>  
            </div>
        </div>
    );
}

export default StatCourses;
