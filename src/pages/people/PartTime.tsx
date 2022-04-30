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
        <>
            <div className='container'>
                <h1 className='page-header'>Part Time Faculty</h1>

                <hr />
                <br />

            </div>
            <div className='container'>
                <div className="row">
                    {partTimeFaculty.map(createCard)}
                </div>  
            </div>
        </>
    );
}

export default PartTime;
