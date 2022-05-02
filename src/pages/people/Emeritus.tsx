import React from 'react';
import EmeritusCard from '../../components/EmeritusCard';
import emeritusFaculty from '../../data/emeritus-faculty';

const Emeritus = () => {
    const createCard = (person: any) => {
        return (
            <div className="col-lg-4">
                <EmeritusCard
                    key = {person.id}
                    name = {person.name}
                    position = {person.position}
                    degree = {person.degree}
                    interests = {person.interests}
                    email = {person.email}
                />
            </div>
        );
    }

    return (
        <div className='container'>
            <h1 className='page-header'>Emeritus Faculty</h1>

            <hr />
            <br />
            
            <div className="row">
                {emeritusFaculty.map(createCard)}
            </div>  
        </div>
    );
}

export default Emeritus;
