import React, { useEffect, useState } from "react";
import './App.css';

function App() {
    const [test, setTest] = useState("");

    useEffect(() => {
       console.log('fetch')
       fetch('test').then(res => res.json()).then(data => {
         setTest(data.test);
       });
     }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>Welcome. This number is a test! {test}</p>
    </div>
  );
}

export default App;
