import React from 'react';
import './HashTables.css'; 

const Hash = () => {
  return (
    <div className="hash-container">
      <h1>Hash Tables</h1>
      <p className="summary">
        <strong>When to Use Hash Tables:</strong> Hash Tables (or Hash Maps) are ideal for fast lookups, counting occurrences, grouping elements, and ensuring uniqueness. They allow O(1) average time complexity for insertion, deletion, and lookup operations.
      </p>
      <div className="use-cases">
        <h2>When to Use:</h2>
        <ul>
          <li>
            <strong>Array:</strong> Use when you need an ordered collection of items and indexed access. Arrays are not great for fast lookups but are simple for holding and accessing elements by index.
          </li>
          <li>
            <strong>Set:</strong> Use when you need to store unique values without duplicates. Sets are ideal for checking existence without caring about order, and they offer O(1) for lookups, insertions, and deletions.
            <button 
              className="easy-problem-btn" 
              onClick={() => window.open('https://neetcode.io/problems/duplicate-integer', '_blank')}
            >
              Easy Problem
            </button>
          </li>
          <li>
            <strong>Map:</strong> Use when you need to associate keys with values. Maps are useful when the order of elements matters or when the keys are not just strings or numbers. Maps provide O(1) operations for most tasks. <br />
            <button 
              className="easy-problem-btn" 
              onClick={() => window.open('https://neetcode.io/problems/two-integer-sum', '_blank')}
            >
              Easy Problem
            </button>
          </li>
          <li>
            <strong>Object:</strong> Use when you need key-value pair structure, and the keys are strings or symbols. Objects are simple and efficient but are limited compared to Maps in key flexibility. <br />
            <button 
              className="easy-problem-btn" 
              onClick={() => window.open('https://neetcode.io/problems/is-anagram', '_blank')}
            >
              Easy Problem
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hash;
