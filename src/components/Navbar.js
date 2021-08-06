import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logoImg from '../images/IBM_logo_pos_RGB.png';

const NavBar = () => {
  const [activeKey, setActiveKey] = useState(-1);

  const location = useLocation();


  //the home page contact form picture col needs to be set col-lg-6 so that it wraps correctly
  useEffect(() => {
    if (location.pathname == '/about') {
      setActiveKey(1);
      
    } 
    if (location.pathname == ('/installations')) {
      setActiveKey(2);
  
    } 
    if (location.pathname == ('/workflow')) {
      setActiveKey(3);
  
    } 
    if (location.pathname == ('/connecting')) {
      setActiveKey(4);
  
    } 
    if (location.pathname.startsWith('/team')) {
      setActiveKey(5);
     
    } 
    if (location.pathname.startsWith('/blog')) {
      setActiveKey(6);
      
    } 
    if (location.pathname.startsWith('/contact')) {
      setActiveKey(7);
      
    } 

  }, [location]);

  return (
    <Navbar expand='sm' sticky='top'>
      <div className='container'>
        <Navbar.Brand as={Link} to='/' onClick={() => setActiveKey(0)}>
          <img
            src={logoImg}
            className='nav-bar-logo'
            alt='IBM Logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='nav-bar-component' />
        <Navbar.Collapse id='nav-bar-component'>
          <Nav
            className='mr-auto ml-auto'
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
            
          >
            <Nav.Link as={Link} to='/' eventKey={0}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/about' eventKey={1}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/installations' eventKey={2}>
              Installations
            </Nav.Link>
            <Nav.Link as={Link} to='/workflow' eventKey={3}>
              Workflow
            </Nav.Link>
            <Nav.Link as={Link} to='/connecting' eventKey={4}>
              Connecting
            </Nav.Link>
            <Nav.Link as={Link} to='/team' eventKey={5}>
              Team
            </Nav.Link>
            <Nav.Link as={Link} to='/blog' eventKey={6}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to='/contact' eventKey={7}>
              Contact
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
