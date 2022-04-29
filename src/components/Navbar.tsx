import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: '#5f259f'}}>
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand d-none d-lg-block">Department of Mathematics and Statistics</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink to='/' className='nav-link'>Home</NavLink></li>
                        <li className="nav-item"><NavLink to='/people' className='nav-link'>People</NavLink></li>
                        <li className="nav-item"><NavLink to='/undergraduate' className='nav-link'>Undergraduate</NavLink></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Courses
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to='/courses/umath'>Mathematics (Undergraduate)</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/courses/ustats'>Statistics (Undergraduate)</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Mathematics (Graduate)</a></li>
                                <li><a className="dropdown-item" href="#">Statistics (Graduate)</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
