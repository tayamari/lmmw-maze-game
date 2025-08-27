import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx';
{/* import About from './components/About.jsx'; */}


function App() {

  return (
    <>
      <div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about" element={<About/>} /> */}
        </Routes>
      </div>
    </> 
  );
}

export default App;
