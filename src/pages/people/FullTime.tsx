import React from 'react';
import FullTimeCard from '../../components/FullTimeCard';
import fullTimeFaculty from '../../data/full-time-faculty';

const FullTime = () => {
    const createCard = (person: any) => {
        return (
            <div className="col-lg-4">
                <FullTimeCard
                    key = {person.id}
                    name = {person.name}
                    position = {person.position}
                    img = {person.img}
                    degree = {person.degree}
                    interests = {person.interests}
                    email = {person.email}
                    tel = {person.tel}
                    office = {person.office}
                />
            </div>
        );
    }

    return (
        <div className='container'>
            <h2 className='page-header'>Full Time Faculty</h2>

            <hr />
            <br />
            
            <div className="row">
                {fullTimeFaculty.map(createCard)}
            </div>  
        </div>
    );
}

export default FullTime;
