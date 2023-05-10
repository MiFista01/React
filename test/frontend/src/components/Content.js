import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Specialties from '../pages/Specialties';

export default function Content(){
    return(
       <Router>
        <Routes>
            <Route exact path='/' element ={<Home />}/>
            <Route exact path='/specialties' element ={<Specialties />}/>
        </Routes>
       </Router>
    )
}