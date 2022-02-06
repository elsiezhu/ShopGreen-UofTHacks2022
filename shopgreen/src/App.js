import React, { useEffect, useState } from "react";
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from './components/pages/homepage'
import Categories from "./components/pages/categories"
import About from "./components/pages/about"
import OurCause from "./components/pages/ourcause"
import Businesses from "./components/pages/businesses"
import Contact from "./components/pages/contact";
import HealthAndBeauty from "./components/pages/health-and-beauty";
import TravelAndTransportation from "./components/pages/travel-and-transportation";
import Food from "./components/pages/food";
import FashionAndStyle from "./components/pages/fashion-and-style";
import HomeAndGarden from "./components/pages/home-and-garden";
import Fun from "./components/pages/fun";
import Pets from "./components/pages/pets";
import Kids from "./components/pages/kids";

function App() {
//    const [test, setTest] = useState("");

//    useEffect(() => {
//       console.log('fetch');
//       fetch('test').then(res => res.json()).then(data => {
//         setTest(data.test);
//       });
//     }, []);

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
                <Route path={'/about'} element={<About />}/>
                <Route path={'/ourcause'} element={<OurCause />}/>
                <Route path={'/businesses'} element={<Businesses />}/>
                <Route path={'/contact'} element={<Contact />}/>
                <Route path={'/health-and-beauty'} element={<HealthAndBeauty />}/>
                <Route path={'/travel-and-transportation'} element={<TravelAndTransportation />}/>
                <Route path={'/food'} element={<Food />}/>
                <Route path={'/fashion-and-style'} element={<FashionAndStyle />}/>
                <Route path={'/home-and-garden'} element={<HomeAndGarden />}/>
                <Route path={'/fun'} element={<Fun />}/>
                <Route path={'/pets'} element={<Pets />}/>
                <Route path={'/kids'} element={<Kids />}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
