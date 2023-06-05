import React from 'react'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
export default function Header({homeClick, aboutClick, advantagesClick, galleryClick, signUpClick}){
    
    
    return(
        <header>
        
        <Navbar collapseOnSelect expand="md" >
            <Container>
                <NavbarToggle aria-controls='responsive-navbar-nav' />
                <NavbarCollapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link onClick={homeClick} className='text-16'><h2>Home</h2></Nav.Link>
                        <Nav.Link onClick={aboutClick}><h2>About</h2></Nav.Link>
                        <Nav.Link onClick={advantagesClick}><h2>Advantages</h2></Nav.Link>
                        <Nav.Link onClick={galleryClick}><h2>Gallery</h2></Nav.Link>
                        <Nav.Link onClick={signUpClick}><h2>SignUp</h2></Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
        </header>
    )
}