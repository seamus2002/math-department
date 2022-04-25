import React, { useState } from 'react';
import FullTime from './FullTime';
import PartTime from './PartTime';


const People = () => {
  const [page, setPage] = useState(<FullTime />);

  return (
    <div>
      <h1>Faculty</h1>
      <button type="button" className="btn btn-info faculty-btn" onClick={() => setPage(<FullTime />)}>Full-Time</button>
      <button type="button" className="btn btn-info faculty-btn" onClick={() => setPage(<PartTime />)}>Part Time</button>
      <button type="button" className="btn btn-info faculty-btn">Professors Emeriti</button>
      {page}
    </div>
  );
}

export default People;
