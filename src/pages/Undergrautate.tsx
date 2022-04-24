import React, { useState } from 'react';
import UMath from './subpages/UMath';
import UStats from './subpages/UStats';
import ULogic from './subpages/ULogic';
import UBAMA from './subpages/UBAMA';

const Undergrautate = () => {
    const [page, setPage] = useState(<UMath />);


    return (
        <div>
            <h1 className='page-header'>Undergraduate Programs</h1>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary" onClick={() => {setPage(<UMath />)}}>Mathematics</button>
                <button type="button" className="btn btn-primary" onClick={() => {setPage(<UStats />)}}>Statistics</button>
                <button type="button" className="btn btn-primary" onClick={() => {setPage(<ULogic />)}}>Logic</button>
                <button type="button" className="btn btn-primary" onClick={() => {setPage(<UBAMA />)}}>BA/MA</button>
            </div>
            <br />
            <br />
            {page}
        </div>
    );
}

export default Undergrautate;
