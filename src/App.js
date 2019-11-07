import React from 'react';
import logo from './Phoenix.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gato Noches resumes it's normal schedule of Friday Night epicness this friday at 8 or 9 or whatever.
        </p>
        <a
          className="App-link"
          href="https://github.com/EricNavar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cool Kids Club
        </a>
      </header>
    </div>
  );
}

export default App;
