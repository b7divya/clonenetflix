import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Sign from './Components/Sign/Sign';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;