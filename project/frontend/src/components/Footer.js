import React from 'react'
import { Container} from 'react-bootstrap'
export default function Footer(){
    return(
        <footer className='footer mt-auto pt-3'>
            <Container className='text-center' bg='dark' fluid style={{color:"white", height:"5vh", position:"relative",marginTop:"60px", padding:"10px", backgroundColor:"black"}}>
                <p>Design &copy; 2023 Backend Node Express | Front React | TextProject</p>
            </Container>
        </footer>
    )
}