import React from 'react';
import FullTimeCard from '../../components/FullTimeCard';
import fullTimeFaculty from '../../data/full-time-faculty';

const FullTime = () => {
    const createCard = (person: any) => {
        return (
            <div className="col">
                <FullTimeCard
                    key = {person.id}
                    name = {person.name}
                    position = {person.position}
                    interests = {person.interests}
                />
            </div>
        );
    }

    return (
        <div>
            <h2>Full Time Faculty</h2>
            <div className='container'>
                <div className="row">
                    {fullTimeFaculty.map(createCard)}
                </div>  
            </div>
        </div>
    );
}

export default FullTime;