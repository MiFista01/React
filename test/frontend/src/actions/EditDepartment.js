import React from 'react'
import axios from 'axios'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditPRofession() {
    const[department, setDepartment] = React.useState([]) ;
    
    
    const getDepartment = async ()=>{
        const res = await axios.get(`http://localhost:5000/department`)
        setDepartment(res.data)
    }
   
    const {id} = useParams()
    const [name, setName] = React.useState('');
    const navigate = useNavigate();
    React.useEffect( ()=>{
        const getProfessionId = async ()=>{
            const res = await axios.get(`http://localhost:5000/department/${id}`)
            setName(res.data.name)
        }
        getProfessionId()
        getDepartment()
    },[id])
    const updateDepartment = async (e)=>{
        e.preventDefault();
        await axios.patch(`http://localhost:5000/department/${id}`,{name})
        navigate(`/department`);
    }
    return (
        <Container className='mt-1'>
            <h2 className='text-center'>Edit profession</h2>
            <Row>
                <Col md={{span:7,offset:2}}>
                    <Form onSubmit={updateDepartment}>
                        <Form.Group controlId='formControlText'>
                            <Form.Label>Name Profession</Form.Label>
                            <Form.Control name='name' className='input' type='text' placeholder='Name' value={name}  onChange={(e)=> setName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button variant='primary' type='submit' className='mt-3'>Update Department</Button>
                        <Button variant='primary' className='mt-3 ms-3' href='/department'>Department List</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
  )
}
