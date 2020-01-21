import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Router>        
      </header>
    </div>
  );
}

export default App;
