import React from 'react'
import { Accordion, Col, Container, Nav, NavLink, Navbar, Row } from 'react-bootstrap'
import programsList from '../data/program.json';


export default function AccordingBox(){
    return(
        <Container className='mt-5'>
            <Row>
                <Col md={{span: 7, offset: 2}}>
                    <h2>
                        According Box
                    </h2>
                    <Accordion>
                        {programsList.map((data) => (
                          
                            <Accordion.Item eventKey={data.id} key={data.id}>
                                <Accordion.Header>
                                    {data.name}#{data.id}
                                </Accordion.Header>
                                <Accordion.Body>{data.description}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}