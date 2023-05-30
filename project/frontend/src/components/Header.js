import React from 'react'
import logo from '../assets/logo.png';
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
export default function Header(){
    return(
        <header>
        
        <Navbar sticky='top' collapseOnSelect expand="md" bg='light' variant='light' >
            <Container>
                <Navbar.Brand className="w-auto" >
                    <NavLink href='/' className="w-auto"><img src={logo} className="col-1" alt="logo"/></NavLink>
                </Navbar.Brand>
            
                <NavbarToggle aria-controls='responsive-navbar-nav' />
                <NavbarCollapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavLink href='/specialties' className='fs-6'>Почему стоит выбрать IVKHK</NavLink>
                        <NavLink href='/profession' className='fs-6'>О профессии</NavLink>
                        <NavLink href='/department' className='fs-6'>Навыки</NavLink>
                        <NavLink href='/specialties' className='fs-6'>Условия поступления</NavLink>
                        <NavLink href='/profession' className='fs-6'>Галерея</NavLink>
                        <NavLink href='/department' className='fs-6'>Отзывы</NavLink>
                        <NavLink href='/profession' className='fs-6'>Контакты</NavLink>
                        <NavLink href='/department' className='fs-6'>Регистрация</NavLink>
                        <NavLink href='/profession' className='fs-6'>Возможности</NavLink>
                        <NavLink href='/department' className='fs-6'>FAQ</NavLink>
                        <NavLink href='/department' className='fs-6'>Вход</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
        </header>
    )
}