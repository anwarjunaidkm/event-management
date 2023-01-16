import React from 'react'
import { Button } from 'reactstrap'
import {Container,Nav,Navbar} from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { logo } from '../image/image';



function Header() {
  return (
    <>
    
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"> <img  className='header-logo' src={logo} alt="" />EVENT
          </Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            
            <CgProfile size={28} />

          </Nav>
        </Container>
      </Navbar>
    </>



        
        
        

   
  )
}

export default Header