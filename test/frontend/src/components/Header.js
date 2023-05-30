import React from 'react'
import logo from '../logo.svg';
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
export default function Header(){
    return(
        <header>
        
        <Navbar sticky='top' collapseOnSelect expand="md" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <NavLink href='/' style={{display:'flex', alignItems:'center'}}><span className='logo-text'>Test</span><img src={logo} className="App-logo" alt="logo"/></NavLink>
                </Navbar.Brand>
            
                <NavbarToggle aria-controls='responsive-navbar-nav' />
                <NavbarCollapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavLink href='/specialties' className='fs-3'>Specialties</NavLink>
                        <NavLink href='/profession' className='fs-3'>Manage Profession</NavLink>
                        <NavLink href='/department' className='fs-3'>Manage Department</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
        </header>
    )
}