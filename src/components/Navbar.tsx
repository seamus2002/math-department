import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#5f259f'}}>
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand d-none d-lg-block">Department of Mathematics and Statistics</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {/* Home */}
                        <li className="nav-item"><NavLink to='/' className='nav-link'>Home</NavLink></li>

                        {/* People */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                People
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to='/people/fulltime'>Full Time Faculty</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/people/parttime'>Part Time Faculty</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/people/emeritus'>Emeritus Faculty</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/people/'>BA/MA</NavLink></li>
                            </ul>
                        </li>

                        {/* Undergraduate */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Undergraduate
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to='/undergraduate/mathematics'>Mathematics</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/undergraduate/statistics'>Statistics</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/undergraduate/logic'>Logic</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/undergraduate/bama'>BA/MA</NavLink></li>
                            </ul>
                        </li>
                        
                        {/* Courses */}
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
