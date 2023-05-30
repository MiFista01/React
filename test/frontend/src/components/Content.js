import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Specialties from '../pages/Specialties';
import Detail from '../pages/Detail';
import Profession from '../actions/Professions';
import AddProfession from '../actions/AddProfession';
import EditPRofession from '../actions/EditPRofession';
import Department from "../actions/Department"
import AddDepartment from "../actions/AddDepartment"
import EditDepartment from "../actions/EditDepartment"

export default function Content(){
    return(
       <Router>
        <Routes>
            <Route exact path='/' element ={<Home />}/>
            <Route exact path='/specialties' element ={<Specialties />}/>
            <Route exact path='/detail/:id' element ={<Detail />}/>
            <Route exact path='/profession' element ={<Profession />}/>
            <Route exact path='/addprofession' element ={<AddProfession />}/>
            <Route exact path='/editprofession/:id' element ={<EditPRofession />}/>
            <Route exact path='/department' element ={<Department />}/>
            <Route exact path='/adddepartment' element ={<AddDepartment />}/>
            <Route exact path='/editdepartment/:id' element ={<EditDepartment />}/>
        </Routes>
       </Router>
    )
}