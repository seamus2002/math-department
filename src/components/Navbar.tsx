import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import People from '../pages/People';
import Courses from '../pages/Courses';
import Undergrautate from '../pages/Undergrautate';

const Navbar = () => {
  return (
    <div>
        <BrowserRouter>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: '#5f259f'}}>
                <div className="container-fluid">
                    <NavLink exact to='/' className="navbar-brand">Department of Mathematics and Statistics</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink exact to='/' className='nav-link'>Home</NavLink></li>
                            <li className="nav-item"><NavLink to='/people' className='nav-link'>People</NavLink></li>
                            <li className="nav-item"><NavLink to='/undergraduate' className='nav-link'>Undergraduate</NavLink></li>
                            <li className="nav-item"><NavLink to='/courses' className='nav-link'>Courses</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/people">
                    <People />
                </Route>
                <Route path="/undergraduate">
                    <Undergrautate />
                </Route>
                <Route path="/courses">
                    <Courses />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default Navbar;
