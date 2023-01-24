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
          <Navbar.Brand className='d-flex' href="#home"> <img  className='header-logo ' src={""} alt="" /> <h3 className='logo-text'> Eventtyyyy!!</h3>
          </Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
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