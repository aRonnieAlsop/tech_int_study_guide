import React from 'react';
import { Link } from 'react-router-dom';
import './StacksQueues.css';  

const Stacks = () => {
  return (
    <div className="stacks-container">
     <Link to="/" className="back-link">← Back</Link>
      <h1>Stacks</h1>
      <p className="summary">
        <strong>When to Use Stacks:</strong> Stacks are ideal for problems that require backtracking or require access to the most recent item added. They follow the Last-In, First-Out (LIFO) principle, where the last element added is the first to be removed.
      </p>
      <div className="use-cases">
        <h2>When to Use:</h2>
        <ul>
          <li>
            <strong>Undo Operations:</strong> Stacks are often used in text editors for undo operations, where the most recent change is the first one to be undone.
          </li>
          <li>
            <strong>Expression Evaluation:</strong> Stacks are used for parsing and evaluating expressions, especially when working with parentheses or operators.
          </li>
          <li>
            <strong>Depth-First Search (DFS):</strong> DFS in tree or graph traversal is often implemented using stacks, either explicitly or via the call stack during recursion.
          </li>
          <li>
            <strong>Function Calls (Call Stack):</strong> A stack is used to store function calls, and each time a function is called, its execution context is pushed onto the stack.
          </li>
        </ul>
        <button 
              className="easy-problem-btn" 
              onClick={() => window.open('https://neetcode.io/problems/validate-parentheses', '_blank')}
            >
              Easy Problem
            </button>
            <button 
              className="easy-problem-btn" 
              onClick={() => window.open('https://neetcode.io/problems/minimum-stack', '_blank')}
            >
              Medium Problem
            </button>
      </div>
    </div>
  );
}

export default Stacks;

