import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
export default function Home(){
    return(
        <Container className='mt-1'>
            <h2>Specialties</h2>
            <Row>
                <Col md='3'>
                    <h5>Departments</h5>
                </Col>
                <Col md='9'>
                    <h5>Specialties list</h5>
                </Col>
            </Row>
        </Container>
    )
}