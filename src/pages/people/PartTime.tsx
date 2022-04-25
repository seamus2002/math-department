import React from 'react';
import partTimeFaculty from '../../data/part-time-faculty';
import PartTimeCard from '../../components/PartTimeCard';

const PartTime = (props: any) => {
    const createCard = (person: any) => {
        return (
            <div className="col-lg-4">
                <PartTimeCard
                    key = {person.id}
                    name = {person.name}
                    position = {person.position}
                    email = {person.email}
                />
            </div>
        );
    }

    return (
        <div>
            <h1>Part Time Faculty</h1>
            <div className='container'>
                <div className="row">
                    {partTimeFaculty.map(createCard)}
                </div>  
            </div>
        </div>
    );
}

export default PartTime;
