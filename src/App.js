import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navb from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './style.css';

function App() {
  return (
    <>
      <Navb />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
