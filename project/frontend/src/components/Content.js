import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';

export default function Content(){
    return(
       <Router>
        <Routes>
            <Route exact path='/' element ={<Home />}/>

        </Routes>
       </Router>
    )
}