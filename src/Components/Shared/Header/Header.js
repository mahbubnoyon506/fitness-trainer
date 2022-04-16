import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Banner from '../../Utilities/Banner/Banner';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Container>
                    <div>
                        <Navbar.Brand className='text-dark' href="#home">David Louis</Navbar.Brand>
                        <p>Olympian & Fitness Expert</p>
                    </div>
                    <Navbar.Toggle className='bg-dark' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='collapse-wrap'>
                        <Nav className="me-auto">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            <NavLink to='/blogs'>Blogs</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to='/login'>Login</NavLink>
                            <NavLink to='/signup'>Sign Up</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Banner></Banner>

        </div>
    );
};

export default Header;