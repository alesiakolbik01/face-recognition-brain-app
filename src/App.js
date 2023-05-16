import './App.css';
import 'tachyons';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';

import HomePage from './components/HomePage/HomePage';


const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}

export default App;
