import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function SpecialityList({departmentId, searchValue}){
    const [specialties, setSpecialties] = useState([]);
    useEffect(()=>{
        const department_id = departmentId > 0 ? `/department/${departmentId}` :""
        const getSpeciality = async() =>{
            const res = await axios.get(`http://localhost:5000/profession${department_id}`)
            setSpecialties(res.data)
        }
        getSpeciality()
    },[departmentId])
    return(
       <>
        {specialties.filter((data)=>{
            if(data.name.toLowerCase().includes(searchValue.toLowerCase())){
                return true
            }
            return false
        }).map((data)=>(
            <Row className='m-2' key={data.id}>
                <Col md="3">
                    <img className='mr-3 img-thumbnail' src={data.poster} alt="poster"/>
                </Col>
                <Col md="9">
                    <h5>{data.name}</h5>
                    <span className='fst-italic'>Study duration: </span>{data.duration}<br/>
                    <span className='fst-italic'>Learning base: </span>{data.education}<br/>
                    <span className='fst-italic'>Department: </span>{data.department.name}<br/>
                    <span className='fst-italic'>Date publish: </span>{data.createdAt}<br/>
                    <Link to={`/detail/${data.id}`} className='me-1'>Detail</Link>
                </Col>
                <hr/>
            </Row>
        ))}
       </>
    )
}