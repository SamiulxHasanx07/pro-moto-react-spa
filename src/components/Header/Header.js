import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Link className='nav-brand' to='/'><h3>Pro Moto</h3></Link>
                    {/* <Navbar.Brand href="#">Pro Moto</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="navbarScroll"><FontAwesomeIcon className='menu-toggler' icon={faAlignRight}></FontAwesomeIcon></Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 nav-link"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <CustomLink to='/'>Home</CustomLink>
                            <CustomLink to='/reviews'>Reviews</CustomLink>
                            <CustomLink to='/dashboard'>Dashboard</CustomLink>
                            <CustomLink to='/blogs'>Blogs</CustomLink>
                            <CustomLink to='/about'>About</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;