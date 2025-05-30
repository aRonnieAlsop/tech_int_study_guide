import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import LinkedLists from './components/LinkedLists/LinkedLists';
import Trees from './components/TreesTriesGraphs/Trees';
import Stacks from './components/StacksQueues/StacksQueues';
import Vectors from './components/VecrtorsArrayLists/Vectors';
import Heaps from './components/Heaps/Heaps';
import Hash from './components/HashTables/HashTables';
import CaseForAlgorithms from './components/CasesForAlgorithms/CaseForAlgorithms';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/linkedlists" element={<LinkedLists />} />
       <Route path="/trees" element={<Trees />} />
       <Route path="/stacks" element={<Stacks />} />
       <Route path="/vectors" element={<Vectors />} />
       <Route path="/heaps" element={<Heaps />} />
       <Route path="/hash" element={<Hash />} />
       <Route path="/cases-for-algorithms" element={<CaseForAlgorithms />} />
      </Routes>
    </Router>
  );
}

export default App;
