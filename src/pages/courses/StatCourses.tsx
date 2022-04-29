import React, { useState, useEffect } from 'react';

const StatCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/seamus2002/math-dept-data/stat-courses')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setCourses(data);
            })
    }, [])

    const createCard = (course: any) => {
        return (
            <div className='courses'>
                <h5>{ course.course }: { course.title }</h5>
                <p>{ course.credits } Credits, { course.semesters }</p>
                <p>{ course.description }</p>
                <p>Prerequisites: { course.prereqs }</p>
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
