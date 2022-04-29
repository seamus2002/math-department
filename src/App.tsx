import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import People from './pages/people/People';
import Undergrautate from './pages/undergraduate/Undergrautate';
import Courses from './pages/courses/Courses';
import Course from './pages/courses/Course';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/undergraduate" element={<Undergrautate />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:course" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
