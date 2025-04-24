import React, { useState } from 'react';
import './CaseForAlgorithms.css';

function CaseForAlgorithms() {
  const [selectedClue, setSelectedClue] = useState(null);
  const [showAlgorithms, setShowAlgorithms] = useState(false);

  const clues = [
    { 
      clue: "You need to arrange data in a specific order (e.g., ascending or descending).",
      category: "Sorting Problems",
    },
    { 
      clue: "You need to find an element or match data in a collection.",
      category: "Searching Problems",
    },
    { 
      clue: "The problem involves connections or relationships between entities.",
      category: "Graph Problems",
    },
    { 
      clue: "The problem can be broken down into overlapping subproblems.",
      category: "Dynamic Programming",
    },
    { 
      clue: "The problem asks you to make the best possible choice at each step.",
      category: "Greedy Algorithms",
    },
    { 
      clue: "The problem can be split into smaller subproblems, and the solutions to the subproblems can be combined.",
      category: "Divide and Conquer",
    },
    { 
      clue: "You need to explore all possible solutions and go back if you reach an invalid one.",
      category: "Backtracking",
    },
    { 
      clue: "You need to process, transform, or match strings.",
      category: "String Manipulation",
    },
    { 
      clue: "The problem can be broken down into smaller instances of the same problem (like trees or factorial).",
      category: "Recursion",
    },
    { 
      clue: "The problem involves finding a subarray or substring that satisfies a condition, and you need to dynamically adjust a window to optimize the search.",
      category: "Sliding Window",
    }
  ];

  const algorithms = {
    "Sorting Problems": [
      "Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"
    ],
    "Searching Problems": [
      "Linear Search", "Binary Search", "Hash Tables"
    ],
    "Graph Problems": [
      "Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Dijkstra’s Algorithm", 
      "Topological Sort", "Bellman-Ford"
    ],
    "Dynamic Programming": [
      "Knapsack Problem", "Fibonacci Sequence", "Longest Common Subsequence (LCS)",
      "Coin Change Problem", "Matrix Chain Multiplication"
    ],
    "Greedy Algorithms": [
      "Huffman Coding", "Interval Scheduling", "Fractional Knapsack", 
      "Prim’s and Kruskal’s Algorithms"
    ],
    "Divide and Conquer": [
      "Merge Sort", "Quick Sort", "Binary Search"
    ],
    "Backtracking": [
      "N-Queens Problem", "Sudoku Solver", "Subset Sum Problem"
    ],
    "String Manipulation": [
      "KMP Algorithm", "Rabin-Karp Algorithm", "Trie Data Structure"
    ],
    "Recursion": [
      "Factorial Calculation", "Tree Traversal", "Towers of Hanoi", 
      "Permutations and Combinations"
    ],
    "Sliding Window": [
      "Longest Substring Without Repeating Characters", "Maximum Sum Subarray of Size K", 
      "Subarrays with K Distinct Elements", "Longest Substring with At Most Two Distinct Characters"
    ]
  };

  const handleClick = (clue) => {
    setSelectedClue(clue);
    setShowAlgorithms(false); // Reset when a new clue is clicked
  };

  const handleShowAlgorithms = () => {
    setShowAlgorithms(true);
  };

  const handleBack = () => {
    setSelectedClue(null);
    setShowAlgorithms(false);
  };

  return (
    <div className="container">
      {!selectedClue ? (
        <>
          <div className="title">Clues for When to Use What Algorithm</div>
          <div className="clue-row">
            {clues.map((item, index) => (
              <div
                key={index}
                className="clue-box"
                onClick={() => handleClick(item.category)}
              >
                {item.clue}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button className="back-button" onClick={handleBack}>Back</button>
          <div className="selected-box">
            <div className="clue-box center">{selectedClue}</div>
            <div className="category-box">
              {selectedClue}
            </div>
            <div className="show-algorithms-link">
              <span onClick={handleShowAlgorithms} className="link-text">
                Algorithms to Use
              </span>
            </div>
            {showAlgorithms && (
              <div className="algorithm-list">
                {algorithms[selectedClue]?.map((algo, index) => (
                  <div key={index} className="algorithm-item">
                    {algo}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CaseForAlgorithms;
