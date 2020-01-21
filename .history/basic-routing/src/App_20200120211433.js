import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/about'>About</Link>
      </header>
    </div>
  );
}

export default App;
