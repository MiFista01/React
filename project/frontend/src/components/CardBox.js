import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';

export default function CardBox({applications}){
    return(
        <Container fluid className='mt-5 bg-light'>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <h2 className='mt-5 text-center'>CardBox</h2>
                    <Row xs={1} md={3} className='g-4'>
                        {applications.map((data)=>(
                            <Col>
                                <Card className='m-2' key={data.id}>
                                    <Card.Img variant='top' src={data.image} />
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Text>{data.des.substring(0, 50)}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}