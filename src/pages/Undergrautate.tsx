import React, { useState } from 'react';
import UMath from './subpages/UMath';
import UStats from './subpages/UStats';
import ULogic from './subpages/ULogic';
import UBAMA from './subpages/UBAMA';

const Undergrautate = () => {
    const [page, setPage] = useState(<UMath />);


    return (
        <div>
            <br />
            <br />
            <br />
            <button type="button" className="btn btn-info faculty-btn" onClick={() => {setPage(<UMath />)}}>Mathematics</button>
            <button type="button" className="btn btn-info faculty-btn" onClick={() => {setPage(<UStats />)}}>Statistics</button>
            <button type="button" className="btn btn-info faculty-btn" onClick={() => {setPage(<ULogic />)}}>Logic</button>
            <button type="button" className="btn btn-info faculty-btn" onClick={() => {setPage(<UBAMA />)}}>BA/MA Programs</button>
            {page}
        </div>
    );
}

export default Undergrautate;
