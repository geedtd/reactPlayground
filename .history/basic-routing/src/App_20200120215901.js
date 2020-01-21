import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home(props) {
  return <h1>Home Component</h1>
}
function Blog(props) {
  const { push } = props.history;
  return <>
    <h1>My blog nobody reads</h1>
    <button onClick={() => push("/")}>back home</button>
  </>
}

// function Contact(props) {
//   return <h1>Contact Component</h1> 
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
          {/* <Link to='/contact'>Contact</Link> */}

          <Route exact path='/' component={Home} />
          <Route path='/blog' render={(props) => {
            return <h1>The Blog!</h1>} 
          }
          />
          {/* <Route path='/contact' component={Contact} /> */}
        </Router>        
      </header>
    </div>
  );
}

export default App;
