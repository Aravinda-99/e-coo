import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './assets/component/Home/home.jsx';

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </React.Fragment>

  );
}

export default App;