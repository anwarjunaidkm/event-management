import React from "react";
import { Row, Col, Container, Form, FormGroup } from "reactstrap";
import Header from "../header/Header";

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
                      placeholder="Name"
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
                      placeholder="Name"
                    />
                  </Col>
                </FormGroup>
                        
                    </Col>
               
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default SignTeam;
