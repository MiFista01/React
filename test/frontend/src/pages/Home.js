import React from 'react'
import { Container} from 'react-bootstrap'
import Aaa from '../components/CarouselBox'
export default function Home(){
    return(
        
        <Container className='mt-1'>
            <h2>Home page</h2>
            <Aaa />
        </Container>
    )
}