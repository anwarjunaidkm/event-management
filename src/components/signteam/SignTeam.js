import { red } from "@mui/material/colors";
import React from "react";
import { Row, Col, Container, Form, FormGroup,  } from "reactstrap";
import { Button, TextField } from '@mui/material'

import Header from "../header/Header";
import "./SignTeam.css";

function SignTeam() {
  return (
    <>
      <Header />
      <Container>
        <div className="wrapper">
          <Row>
            <Col>
              <div className="left-signup"></div>
            </Col>
            <Col>
              <Form className="form-main">
                <h5
                  style={{
                    color: "#6a3921",
                    fontSize: "17px",
                    textAlign: "center",
                    paddingBottom: "10px",
                  }}
                >
                  Team Registration
                </h5>
                <Row>
                   
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                    
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Team Name"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Username"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <input
                          type="email"
                          class="form-control form-control-sm"
                          placeholder="Email"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Phone"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Place"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Address"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Work time"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Overview"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="District"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                 
                  
                  
                </Row>
        
               
                <div  style={{display:"flex",justifyContent:"center",paddingTop:"20px"}}>
                   
                <Button style={{backgroundColor:"#6a3921",fontSize:"12px", borderRadius:"13px"}} variant="contained">SignUp</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default SignTeam;
