import React from "react";
import "./SignUser.css";
import Header from "../header/Header";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { minHeight } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserApi } from "../../store/user/UserSlice";
import { toast, ToastContainer } from "react-toastify";

function SignUser() {
  const [user, setUser] = useState();
  const navigate=useNavigate()
  const dispatch=useDispatch()
  

  const Handle = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  // console.log("USER===",user.password);
  const HandleSignup =(e)=>{
    e.preventDefault()
    if(user.password != user.password2)
    {
      // alert("password not match")
      toast.error("Password Mismatch. Please try again.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:"colored"
      });
      
    }
    else{

      dispatch(CreateUserApi({new: user,navigate}))
    }

  }
  return (
    <>
      <Header />
      <Container>
      <ToastContainer />

        <div className="wrapper">
          <Row>
            <Col>
              <div className="left-signup"></div>
            </Col>
            <Col>
              <Form  onSubmit={HandleSignup} className="form-main">
                <h5
                  style={{
                    color: "#6a3921",
                    fontSize: "17px",
                    textAlign: "center",
                    paddingBottom: "10px",
                  }}
                >
                  User Registration
                </h5>

                <FormGroup row>
                  <Col sm={10}>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Name"
                      name="full_name"
                      onChange={(e)=>Handle(e)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={10}>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Username"
                      name="username"
                      onChange={(e)=>Handle(e)}
                  
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={10}>
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      placeholder="Phone"
                      name="phone"
                      onChange={(e)=>Handle(e)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={10}>
                    <input
                      type="email"
                      class="form-control form-control-sm"
                      placeholder="Email"
                      name="email"
                      onChange={(e)=>Handle(e)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={10}>
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      placeholder="Password"
                      name="password"
                      onChange={(e)=>Handle(e)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={10}>
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      placeholder="Re-Password"
                      name="password2"
                      onChange={(e)=>Handle(e)}
                    />
                  </Col>
                </FormGroup>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <Button style={{backgroundColor:"#6a3921", borderRadius:"15px",fontSize:"13px"}}>SignUp</Button> */}
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
              <p
                style={{
                  color: "gray",

                  marginBottom: 0,

                  fontSize: "10px",
                  paddingTop: "15px",
                  textAlign: "center",
                }}
              >
                if you have a Team..?!{" "}
                <span style={{ fontWeight: "bold", color: "#6a3921" }}>
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={"/signteam"}
                  >
                    Sign Up
                  </Link>
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default SignUser;
