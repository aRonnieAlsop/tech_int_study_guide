import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <div className="left-box">
        <h1 className="title">TECH INTERVIEW STUDY GUIDE</h1>
      </div>
      <div className="right-box">
        <div className="category">
          <h2>Data Structures</h2>
          <ul>
            <li>
              <Link to="/linkedlists" className="data-link">Linked Lists
            </Link>
            <div className="popup">Linked Lists: Use for efficient insertions and deletions and flexible sizing, but avoid for random access.</div>
            </li>
            <li>
              <Link to="/trees" className="data-link">Trees, Tries, & Graphs
            </Link>
            <div className="popup">Trees: Use for hierarchical data, efficient searching, insertion, and deletion.
Tries: Use for prefix-based searches and efficiently storing large sets of strings.
Graphs: Use for networks or relationships and pathfinding problems.
            </div>
            </li>
            <li>
              <Link to="/stacks" className="data-link">Stacks & Queues
            </Link>
            <div className="popup">Stacks & Queues: Use for order-dependent processing, with stacks for LIFO and queues for FIFO.</div>
            </li>
            <li>
              <Link to="/heaps" className="data-link">Heaps
            </Link>
            <div className="popup">Heaps: Use for priority-based processing and dynamic sorting.</div>
            </li>
            <li>
              <Link to="/vectors" className="data-link">Vectors/ArrayLists
            </Link>
            <div className="popup">Vectors/ArrayLists: Use for dynamic, resizable arrays with quick random access.</div>
            </li>
            <li>
              <Link to="/hash" className="data-link">Hash Tables
            </Link>
            <div className="popup">Hash Tables: Use for fast lookups, counting occurrences, grouping elements, and ensuring uniqueness.</div>
            </li>
          </ul>
        </div>
        <div className="category">
          <h2>Algorithms</h2>
          <ul>
            <li><a href="#">Breadth-First Search</a></li>
            <li><a href="#">Depth-First Search</a></li>
            <li><a href="#">Binary Search</a></li>
            <li><a href="#">Merge Sort</a></li>
            <li><a href="#">Quick Sort</a></li>
          </ul>
        </div>
        <div className="category">
          <h2>Concepts</h2>
          <ul>
            <li><a href="#">Bit Manipulation</a></li>
            <li><a href="#">Memory (Stack vs. Heap)</a></li>
            <li><a href="#">Recursion</a></li>
            <li><a href="#">Dynamic Programming</a></li>
            <li><a href="#">Big O Time & Space</a></li>
          </ul>
        </div>
        <div className="algorithm-to-use">
          <Link className="algorithm-case-link">
          How<br />to<br />Know<br />Which<br />Algorithm<br />to<br />Use
          </Link>
          </div>
      </div>
    </div>
  );
}

export default Home;
