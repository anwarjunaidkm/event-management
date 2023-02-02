import React, { useState } from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { logo } from '../image/image';
import { Link, useNavigate } from 'react-router-dom';
import { Button,  } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { LogoutApi } from '../../store/auth/AuthSlice';



function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const {isLoggedIn}=useSelector((state)=>state.Auth)
//   console.log(isLoggedIn);
const LogoutHandle = (e) =>{
    e.preventDefault(e)
      dispatch(LogoutApi(navigate))

}
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="d-flex" href="#home">
            {" "}
            <img className="header-logo " src={""} alt="" />{" "}
            <Link style={{ textDecoration: "none" }} to={"/"}>
              {" "}
              <h3 className="logo-text"> Eventtyyyy!!</h3>
            </Link>
          </Navbar.Brand>
          {/* <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav> */}
          <Nav>
            {/* <CgProfile size={28} /> */}
            {isLoggedIn ? (
              
               
                <Button
                  style={{
                    backgroundColor: "#6a3921",
                    fontSize: "10px",
                    borderRadius: "13px",
                    boxShadow: "none",
                    color: "white",
                    TextDecoder: "none",
                    padding: "5px",
                  }}
                  variant="contained"
                  size="small"
                  onClick={(e)=>LogoutHandle(e)}
                >
                  Logout
                </Button>
              
            ) : (
              <Link style={{ textDecoration: "none" }} to={"/login"}>
                {" "}
                <Button
                  style={{
                    backgroundColor: "#6a3921",
                    fontSize: "10px",
                    borderRadius: "13px",
                    boxShadow: "none",
                    color: "white",
                    TextDecoder: "none",
                    padding: "5px",
                  }}
                  variant="contained"
                  size="small"
                >
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header