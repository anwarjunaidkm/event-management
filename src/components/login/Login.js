import { Button, TextField } from '@mui/material'
import { display, margin, padding } from '@mui/system'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Card, Container } from 'reactstrap'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import "./Login.css"

function Login() {
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

                    <h4 style={{color:"#6a3921"}}>Login</h4>
                    <p style={{color:"gray",fontSize:"10px"}}>Lorem, ipsum dolor ipsum dolor ipsum !!</p>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Username"
                      variant="outlined"
                    />
                    <TextField style={{margin:'12px', }}
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      
                      size="small"
                    />
                    <div style={{margin:"15px"}}>

                    <Button style={{backgroundColor:"#6a3921",fontSize:"12px",}} variant="contained">Login</Button>

                    </div>

                  <p style={{color:"gray",
                     
                      marginBottom: 0,
                     
                      fontSize: "10px",
                      paddingTop:"15px",
                
                
                
                }}>don't have an account yet ?  <span style={{fontWeight:"bold",color:"#6a3921"}}>Sign Up</span></p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      <Footer />
      </div>
    </>
  );
}

export default Login