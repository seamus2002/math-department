import React from 'react';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import People from './pages/people/People';
import Courses from './pages/courses/Courses';
import MathCourses from './pages/courses/MathCourses';
import StatCourses from './pages/courses/StatCourses';
import UMath from './pages/undergraduate/UMath';
import UStats from './pages/undergraduate/UStats';
import ULogic from './pages/undergraduate/ULogic';
import UBAMA from './pages/undergraduate/UBAMA';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/undergraduate/mathematics" element={<UMath />} />
          <Route path="/undergraduate/statistics" element={<UStats />} />
          <Route path="/undergraduate/logic" element={<ULogic />} />
          <Route path="/undergraduate/bama" element={<UBAMA />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/umath" element={<MathCourses />} />
          <Route path="/courses/ustats" element={<StatCourses />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
