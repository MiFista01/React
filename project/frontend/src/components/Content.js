import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';

export default function Content({refs}){
    return(
       <Router>
        <Routes>
            <Route exact path='/' element ={<Home homeRef={refs[0]} aboutRef={refs[1]} advantagesRef={refs[2]} galleryRef={refs[3]} signUpRef={refs[4]} />}/>

        </Routes>
       </Router>
    )
}