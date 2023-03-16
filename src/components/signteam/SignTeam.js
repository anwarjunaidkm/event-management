import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { Row, Col, Container, Form, FormGroup } from "reactstrap";
import { Button, TextField } from "@mui/material";

import Header from "../header/Header";
import "./SignTeam.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateTeamApi } from "../../store/user/UserSlice";
import { ToastContainer } from "react-toastify";

function SignTeam() {
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const [Input, setInput] = useState();
  const Handle = (e) => {
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
  };
   
  const HandleSignup =(e)=>{
    e.preventDefault()
    dispatch(CreateTeamApi({team:Input,navigate}))

  }

  return (
    <>
      <Header />
      <Container>
      <ToastContainer />

        <div className="wrapper-team">
          <Row>
            <Col className="left-signup-team-colum">
              <div className="left-signup-team"></div>
            </Col>
            <Col>
              <Form onSubmit={HandleSignup} className="form-main-team">
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
                          name="team_name"
                          onChange={(e) => Handle(e)}
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
                          name="username"
                          onChange={(e) => Handle(e)}
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
                          name="email"
                          onChange={(e) => Handle(e)}
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
                          name="phone"
                          onChange={(e) => Handle(e)}
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
                          name="place"
                          onChange={(e) => Handle(e)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <textarea
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Address"
                          name="address"
                          onChange={(e) => Handle(e)}
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
                          placeholder="Pincode"
                          name="pin_code"
                          onChange={(e) => Handle(e)}
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
                          placeholder="District"
                          name="district"
                          onChange={(e) => Handle(e)}
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
                          name="work_time"
                          onChange={(e) => Handle(e)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <textarea
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Overview"
                          name="over_view"
                          onChange={(e) => Handle(e)}
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
                          placeholder="Re Password"
                          name="password2"
                          onChange={(e)=>Handle(e)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup row>
                      <Col sm={10}>
                        <input
                          type="password"
                          class="form-control form-control-sm"
                          placeholder="Password"
                          name="password"
                          onChange={(e) => Handle(e)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "20px",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#6a3921",
                      fontSize: "12px",
                      borderRadius: "13px",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    SignUp
                  </Button>
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
