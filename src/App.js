import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import LinkedLists from './components/LinkedLists/LinkedLists';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/linkedlists" element={<LinkedLists />} />
      </Routes>
    </Router>
  );
}

export default App;
