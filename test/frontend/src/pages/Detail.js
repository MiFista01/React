import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Detail(){
    const [speciality, setSpecialty] = React.useState('')
    const [department, setDepartment] = React.useState('')
    const {id} = useParams()
    React.useEffect(()=>{
        const getSpeciality = async () =>{
            const res = await axios.get(`http://localhost:5000/profession/${id}`)
            setSpecialty(res.data)
            setDepartment(res.data.department)
        }
        getSpeciality()
    },[])
    return(
        <>
            <Container className='mt-1'>
                <h2 className='text-xenter m-4'>
                Specialty #{speciality.id}
                </h2>
                <Row>
                    <Col md="6">
                        <img className='mr-3' style={{"object-fit":"contain", "max-width":"100%"}} src={speciality.poster} alt="logo"/>
                    </Col>
                    <Col md="6">
                        <h5>{speciality.name}</h5>
                        <p>
                        <span className='fst-italic'>Study duration: </span>{speciality.duration}<br/>

                        </p>
                        <p>
                        <span className='fst-italic'>Learning base: </span>{speciality.education}<br/>
                            
                        </p>
                        <p>
                        <span className='fst-italic'>Description: </span>{speciality.description}<br/>
                            
                        </p>
                        <p>
                        <span className='fst-italic'>Department: </span>{department.name}<br/>
                            
                        </p>
                        <p>
                        <span className='fst-italic'>Date publish: </span>{speciality.createdAt}
                            
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}