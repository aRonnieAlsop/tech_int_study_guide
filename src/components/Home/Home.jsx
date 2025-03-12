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
            <li><Link to="/linkedlists">Linked Lists</Link></li>
            <li><a href="#">Trees, Tries, & Graphs</a></li>
            <li><a href="#">Stacks & Queues</a></li>
            <li><a href="#">Heaps</a></li>
            <li><a href="#">Vectors/ArrayLists</a></li>
            <li><a href="#">Hash Tables</a></li>
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
      </div>
    </div>
  );
}

export default Home;
