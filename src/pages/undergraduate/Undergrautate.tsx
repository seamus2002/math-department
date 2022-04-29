import React, { useState } from 'react';
import UBAMA from './UBAMA';
import ULogic from './ULogic';
import UMath from './UMath';
import UStats from './UStats';

const Undergrautate = () => {
    const [page, setPage] = useState(<UMath />);


    return (
        <div>
            <h1 className='page-header'>Undergraduate Programs</h1>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-default" onClick={() => {setPage(<UMath />)}}>Mathematics</button>
                <button type="button" className="btn btn-default" onClick={() => {setPage(<UStats />)}}>Statistics</button>
                <button type="button" className="btn btn-default" onClick={() => {setPage(<ULogic />)}}>Logic</button>
                <button type="button" className="btn btn-default" onClick={() => {setPage(<UBAMA />)}}>BA/MA</button>
            </div>
            <br />
            <br />
            {page}
        </div>
    );
}

export default Undergrautate;
