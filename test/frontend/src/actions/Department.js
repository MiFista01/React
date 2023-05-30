import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Profession(){
    const [department, setProfession] = React.useState([]);
    const getDepartment = async ()=>{
        const res = await axios.get(`http://localhost:5000/department`)
        setProfession(res.data)
    }
    const deleteDepartment = async (id)=>{
        if(window.confirm('Are you sure you want to delete #'+id+'?')){
            await axios.delete(`http://localhost:5000/department/${id}`)
            getDepartment()
        }
    }
    React.useEffect(()=>{
        getDepartment();
    },[])
    return(
       <>
        <Container className='mt-1'>
            <h2 className='text-center mt-3'>Department List Manage</h2>
            <Row>
                <Col md={{span:9, offset:2}}>
                    <p className='text-end'>
                        <Link to="/adddepartment">
                            <Button variant='primary' size='sm'>
                                Add new
                            </Button>
                        </Link>
                    </p>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>No#</th>
                                <th>Name</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {department.map((department, index)=>(
                                <tr key={department.id}>
                                    <td>{index+1}.{department.id}</td>
                                    <td>{department.name}</td>
                                    <td className='text-center'>
                                        <Link to={`/editdepartment/${department.id}`} className='me-1'>
                                            <Button variant="primary" size='sm'>
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button onClick={() => deleteDepartment(department.id)} variant='danger'>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
       </>
    )
}