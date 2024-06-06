import Navbar from './page/Navbar.jsx';
import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "../src/page/Home.jsx"
import About from "./page/About.jsx"
import Contacs from "./page/Contacs.jsx"
import Sikils from "./page/Sikils.jsx"
import "./App.css"
import Footer from './page/Footer.jsx';




const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/contact'  element={<Contacs/>}/>
        <Route path='/skills'  element={<Sikils/>}/>
      </Routes>
      <Footer/>
      
    </div>
    
    </>
  );
};

export default App;
