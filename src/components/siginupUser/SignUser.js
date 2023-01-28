import React from "react";
import "./SignUser.css";
import Header from "../header/Header";
import {  Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { minHeight } from "@mui/system";
import { Button, TextField } from '@mui/material'
import { Link } from "react-router-dom";


function SignUser() {
  return (
    <>
      <Header />
      <Container>
        <div className="wrapper">
          <Row>
            <Col><div className="left-signup"></div>
            </Col>
            <Col>
              <Form className="form-main">
                <h5 style={{color:"#6a3921", fontSize:"17px",textAlign:"center",paddingBottom:"10px"}}>User Registration</h5>
                <FormGroup  row>
                
                  <Col sm={10} >
                 
    <input type="text" class="form-control form-control-sm"  placeholder="Name" />

                  </Col>
                </FormGroup>
                <FormGroup row>
                
                  <Col sm={10}>
                  <input type="text" class="form-control form-control-sm"  placeholder="Username" />

                  </Col>
                </FormGroup>
                <FormGroup row>
                
                  <Col sm={10}>
                  <input type="number" class="form-control form-control-sm"  placeholder="Phone" />

                  </Col>
                </FormGroup>
                <FormGroup row>
                
                  <Col sm={10}>
                  <input type="email" class="form-control form-control-sm"  placeholder="Email" />

                  </Col>
                </FormGroup>
                <FormGroup row>
                 
                  <Col sm={10}>
                  <input type="password" class="form-control form-control-sm"  placeholder="Password" />

                  </Col>
                </FormGroup>
                <FormGroup row>
                 
                  <Col sm={10}>
                  <input type="password" class="form-control form-control-sm"  placeholder="Re-Password" />

                  </Col>
                </FormGroup>
                <div  style={{display:"flex",justifyContent:"center"}}>

                {/* <Button style={{backgroundColor:"#6a3921", borderRadius:"15px",fontSize:"13px"}}>SignUp</Button> */}
                <Button style={{backgroundColor:"#6a3921",fontSize:"12px", borderRadius:"13px"}} variant="contained">SignUp</Button>

                </div>
              </Form>
              <p style={{color:"gray",
                     
                      marginBottom: 0,
                     
                      fontSize: "10px",
                      paddingTop:"15px",
                      textAlign:"center"
                
                
                
                }}>if you have a Team..?!  <span style={{fontWeight:"bold",color:"#6a3921"}}> <Link style={{textDecoration:"none",color:"inherit"}} to={"/signteam"}>Sign Up</Link></span></p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default SignUser;
