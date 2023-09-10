import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import HeaderGuest from '../components/Header.js';
import FooterGuest from '../components/Footer.js'

export default function Content({refs, clicks}){
    return(
       <Router>
        <Routes>
            <Route exact path='/' element ={<Fragment>
                <HeaderGuest homeClick={clicks[0]} aboutClick={clicks[1]} advantagesClick={clicks[2]} galleryClick={clicks[3]} signUpClick={clicks[4]} />
                <Home homeRef={refs[0]} aboutRef={refs[1]} advantagesRef={refs[2]} galleryRef={refs[3]} signUpRef={refs[4]} formClick={clicks[4]} />
                <FooterGuest homeClick={clicks[0]} aboutClick={clicks[1]} advantagesClick={clicks[2]} galleryClick={clicks[3]} signUpClick={clicks[4]}/>
            </Fragment>}/>
            <Route exact path='/admin' element ={<Admin />}/>
        </Routes>
       </Router>
    )
}