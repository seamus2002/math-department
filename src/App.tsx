import React from 'react';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import People from './pages/people/People';
import Undergrautate from './pages/undergraduate/Undergrautate';
import Courses from './pages/courses/Courses';
import Course from './pages/courses/Course';
import MathCourses from './pages/courses/MathCourses';
import StatCourses from './pages/courses/StatCourses';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/undergraduate" element={<Undergrautate />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/umath" element={<MathCourses />} />
          <Route path="/courses/ustats" element={<StatCourses />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
