
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent"  variant="dark">
                <Container>
                    <div>
                        <Navbar.Brand className='text-dark' href="#home">David Louis</Navbar.Brand>
                        <p>Olympian & Fitness Expert</p>
                    </div>
                    <Navbar.Toggle className='bg-dark' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='collapse-wrap'>
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/about'>About</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/services'>Services</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/blogs'>Blogs</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/checkout'>Checkout</NavLink>
                        </Nav>
                        <Nav>
                            {
                                user ? <Button variant="outline-dark" onClick={handleSignOut}>Sign Out</Button> : 
                                <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/login'>Login</NavLink>
                            }
                                {/* <NavLink to='/signup'>Sign Up</NavLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;