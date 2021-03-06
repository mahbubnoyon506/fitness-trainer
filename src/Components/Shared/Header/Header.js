
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
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="dark">
                <Container>
                    <div className=''>
                        <Navbar.Brand className='text-dark' href="#home">David Louis</Navbar.Brand>
                        {/* <Link className='h2 text-decoration-none text-dark' to='/'>David Louis</Link> */}
                        <p className='h6'>Olympian & Fitness Expert</p>
                    </div>
                    <Navbar.Toggle className='bg-danger' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='collapse-wrap'>
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/aboutme'>About</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/services'>Services</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/blogs'>Blogs</NavLink>
                            {/* <NavLink className={({ isActive }) => isActive ? "active" : "in-active"} to='/checkout'>Checkout</NavLink> */}
                        </Nav>
                        <Nav>
                            {
                                user ? <Button variant="outline-danger" onClick={handleSignOut}>Sign Out</Button> : 
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