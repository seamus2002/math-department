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
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4">Simple header</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><NavLink exact to='/' className='nav-link'>Home</NavLink></li>
                        <li className="nav-item"><NavLink to='/people' className='nav-link'>People</NavLink></li>
                        <li className="nav-item"><NavLink to='/undergraduate' className='nav-link'>Undergraduate</NavLink></li>
                        <li className="nav-item"><NavLink to='/courses' className='nav-link'>Courses</NavLink></li>
                    </ul>
                </header>
            </div>

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
