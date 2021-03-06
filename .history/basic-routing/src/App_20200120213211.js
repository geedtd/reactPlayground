import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Home(props) {
  return <h1>Home Component</h1>
}
function About(props) {
  return <h1>About Component</h1>
}

function Contact(props) {
  return <h1>Contact Component</h1> 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>

          <Route path='/about' component={About} />
        </BrowserRouter>        
      </header>
    </div>
  );
}

export default App;
