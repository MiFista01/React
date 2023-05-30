import React from 'react'
import Departments from './Department'
import SpecialityList from './SpecialityList'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
export default function Specialties(){
    const[activeIndex, setActive] = React.useState(0)
    const [searchValue, setSearchValue] = React.useState('')
    return(
        <Container className='mt-1'>
            <h2>Specialties list</h2>
            <Row>
                <Col md="3">
                    <h5>Departments</h5>
                    <Departments depId={activeIndex} onClickDepartment = {(id) => setActive(id)}/>
                </Col>
                <Col md="9">
                <Row>
                    <Col md={{span:5, offset: 7}}>
                        <h5 className='text-center mt-3'>Search speciality</h5>
                    </Col>
                    <Form className='d-flex ps-1'>
                        <FormControl type='text' placeholder='search' className='me-sm-2' id='input' value={searchValue} onChange={(event)=> setSearchValue(event.target.value)}/>
                        <Button variant='outline' onClick={()=> setSearchValue('')}>Clear</Button>
                    </Form>
                </Row>
                    <h5>
                        Specialties list
                    </h5>
                    <SpecialityList departmentId={activeIndex} searchValue={searchValue} />
                </Col>
            </Row>
        </Container>
    )
}