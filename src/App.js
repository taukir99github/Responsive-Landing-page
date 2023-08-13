import React from 'react';
import './App.css';
import {AiOutlineMenuFold} from 'react-icons/ai';


function App() {
  return (
    <div className="App">
      <nav>
        <h2>Logo</h2>
        <div className="nav-list">
          <h4>Home</h4>
          <h4>Services</h4>
          <h4>About</h4>
          <h4>Support</h4>
          <button>Sign In</button>
          <p><AiOutlineMenuFold/></p>
        </div>
      </nav>
      <div className="content">
      <div className="content-left">
       <h2> Hello Learn <span>Coding</span> from me</h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo  doloribus odit fugit vero consectetur tempora laudantium omnis? Ab, consectetur.</p>
       <button>Explore Now</button>
      </div>
      <div className="content-right">
        <img src="./pic.jpg" alt="" />
      </div>
      </div>
    </div>
  );
}

export default App;
