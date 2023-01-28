import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { logo } from '../image/image';
import { Link } from 'react-router-dom';
import { Button,  } from '@mui/material'



function Header() {
  return (
    <>
    
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className='d-flex' href="#home"> <img  className='header-logo ' src={""} alt="" /> <Link  style={{textDecoration:"none"}}to={"/"}> <h3 className='logo-text'> Eventtyyyy!!</h3></Link>
          </Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>
          

            {/* <CgProfile size={28} /> */}
          <Link style={{textDecoration:"none"}} to={'/login'}>  <Button style={{backgroundColor:"#6a3921",fontSize:"9px",borderRadius:"18px",boxShadow:'none' ,color:'white' ,TextDecoder:"none"}} variant="contained" size='small'>Login</Button></Link>

          </Nav>
        </Container>
      </Navbar>
    </>



        
        
        

   
  )
}

export default Header