import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            
                                <Link to='/' className='text-decoration-none me-2 text-secondary'>Home</Link>
                                <Link to='/' className='text-decoration-none me-2 text-secondary'>About</Link>
                                <Link to='/' className='text-decoration-none text-secondary'>Career</Link>
                           
                            
                            
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets"><FaUserCircle className='fs-1'></FaUserCircle></Nav.Link>}
                            {user ? <Button variant="dark">Log Out</Button> : <Link to='/login'><Button variant="dark">Log In</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;