import { Button, TextField } from '@mui/material'
import { display, margin, padding } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Card, Container } from 'reactstrap'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import "./Login.css"

function Login() {
  const [input,setInput] =useState()
  const Handle =(e)=>{
    setInput({
      ...input,
      [e.target.name]:e.target.value
    }) 
    


  }
  const handleLogin =(e)=>{
    e.preventDefault()

    console.log(input);
  }

  return (
    <>
      <Header />
      <div className="login-main">
        <Container className="login-container">
          <div className="login-banner">
            <Row >
              <Col  md={""}>
                <div className="login-left"></div>
              </Col>
              <Col sm={""}>
                <div className="login-right">
                  <div>
                    <form onSubmit={handleLogin}>

                    <h4 style={{color:"#6a3921"}}>Login</h4>
                    <p style={{color:"gray",fontSize:"10px"}}>Lorem, ipsum dolor ipsum dolor ipsum !!</p>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Username"
                      variant="outlined"
                      name='username'
                      onChange={(e)=>Handle(e)}
                      
                    />
                    <TextField style={{margin:'12px', }}
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      name='passowrd'
                      onChange={(e)=>Handle(e)}
                      
                      
                      size="small"
                    />
                    <div style={{margin:"15px"}}>
                    
<Button type='submit' style={{backgroundColor:"#6a3921",fontSize:"12px",borderRadius:"13px"}} variant="contained">Login</Button>

                    </div>

                  <p style={{color:"gray",
                     
                      marginBottom: 0,
                     
                      fontSize: "10px",
                      paddingTop:"15px",
                
                
                
                }}>don't have an account yet ? <span style={{fontWeight:"bold",color:"#6a3921"}}> <Link style={{textDecoration:"none",color:"inherit"}} to={"/signuser"}>Sign Up</Link></span></p>
                  </form>
                  </div>

                </div>
              </Col>
            </Row>
          </div>
        </Container>
      {/* <Footer /> */}
      </div>
    </>
  );
}

export default Login