import React, { useEffect, useState } from "react";
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from './components/pages/homepage'
import Categories from "./components/pages/categories";

function App() {
    const [test, setTest] = useState("");

    useEffect(() => {
       console.log('fetch');
       fetch('test').then(res => res.json()).then(data => {
         setTest(data.test);
       });
     }, []);

  return (
    // <div className="App">
    //   <h1>Hello</h1>
    //   <navbar />
    //   <p>Welcome. This number is a test! {test}</p>
    // </div>
    <>
        <Router>
            <Routes>
                <Route path={'/'} element={<Homepage />}/>
                <Route path={'/categories'} element={<Categories />}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
