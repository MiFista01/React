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
    const [duration, setDuration] = React.useState('');
    const [education, setEducation] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [poster, setPoster] = React.useState('');
    const [department_id, setDepartment_id] = React.useState(0);
    const navigate = useNavigate();
    React.useEffect( ()=>{
        const getProfessionId = async ()=>{
            const res = await axios.get(`http://localhost:5000/profession/${id}`)
            setName(res.data.name)
            setDuration(res.data.duration)
            setEducation(res.data.education)
            setDescription(res.data.description)
            setPoster(res.data.poster)
            setDepartment_id(res.data.department_id)
        }
        getProfessionId()
        getDepartment()
    },[id])
    const updateProfession = async (e)=>{
        e.preventDefault();
        await axios.patch(`http://localhost:5000/profession/${id}`,{name,duration,education,description,poster,department_id})
        navigate(`/profession`);
    }
    return (
        <Container className='mt-1'>
            <h2 className='text-center'>Edit profession</h2>
            <Row>
                <Col md={{span:7,offset:2}}>
                    <Form onSubmit={updateProfession}>
                        <Form.Group controlId='formControlText'>
                            <Form.Label>Name Profession</Form.Label>
                            <Form.Control name='name' className='input' type='text' placeholder='Name' value={name}  onChange={(e)=> setName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formControlText'>
                            <Form.Label>Duration</Form.Label>
                            <Form.Control name='duration' className='input' type='number' min={1} max={4} placeholder='Duration' value={duration} onChange={(e)=> setDuration(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formControlText'>
                            <Form.Label>Education</Form.Label>
                            <Form.Control name='education' className='input' type='text' placeholder='Education' value={education} onChange={(e)=> setEducation(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formControlText'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control name='description' className='input' as='textarea' rows={3} placeholder='' value={description} onChange={(e)=> setDescription(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formControlText'>
                            <Form.Label>
                                Department
                            </Form.Label>
                            <Form.Select name='department_id' onChange={(e)=> setDepartment_id(e.target.value)} value={department_id}>
                                <option key={0} value={0} >Select Department</option>
                                {department.map((data)=>(
                                    <option key={data.id} value={data.id}>{data.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId='formControlText'>
                            <Form.Label>Poster</Form.Label>
                            <Form.Control className='input' placeholder='Poster' value={poster} onChange={(e)=> setPoster(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button variant='primary' type='submit' className='mt-3'>Update Profession</Button>
                        <Button variant='primary' className='mt-3 ms-3' href='/profession'>Profession List</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
  )
}
