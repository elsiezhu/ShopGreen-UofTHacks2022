import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
    const [test, setTest] = useState(0);

    useEffect(() => {
       console.log('fetch')
       fetch('test').then(res => res.json()).then(data => {
         setTest(data.test);
       });
     }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>Welcome. This number is a test! {test}</p>
      </header>
    </div>
  );
}

export default App;
