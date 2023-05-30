import React from 'react'
import axios from 'axios'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function AddProfession() {
    
    const [name, setName] = React.useState('');
    const navigate = useNavigate();
    const saveProfession = async (e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:5000/department`,{name})
        console.log(name)
        navigate(`/department`);
    }
    return (
        <Container className='mt-1'>
            <h2 className='text-center'>Add new profession</h2>
            <Row>
                <Col md={{span:7,offset:2}}>
                    <Form onSubmit={saveProfession}>
                        <Form.Group controlId='formControlText'>
                            <Form.Label>Name Profession</Form.Label>
                            <Form.Control name='name' className='input' type='text' placeholder='Name' value={name}  onChange={(e)=> setName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button variant='primary' type='submit' className='mt-3'>Save Department</Button>
                        <Button variant='primary' className='mt-3 ms-3' href='/department'>Department List</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
  )
}
