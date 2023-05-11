import React from 'react'
import { Container} from 'react-bootstrap'
import CarouselBox from '../components/CarouselBox'
import AccordingBox from '../components/According'
export default function Home(){
    return(
        
        <Container className='mt-1'>
            <h2>Home page</h2>
       <CarouselBox /> 
            <AccordingBox />
        </Container>
    )
}