import { blue } from '@mui/material/colors';
import { minHeight } from '@mui/system';
import React, { useEffect } from 'react'
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Button, Card, Col, Container, Row } from 'reactstrap'
import { SingleViewApi } from '../../store/user/UserSlice';
import { avatar, avatar2, avatar3, c1, c1logo, c2, c2logo, c3logo, logo } from '../image/image'
import "./SingleviewCard.css"



function SingleVIewCard() {

  const dispatch= useDispatch()
  const {id, subId}= useParams()


  const {singleData} = useSelector((state) => state.user);
  console.log("SINGLE=",singleData.account_view);
  console.log("whts=","ID=",id,"sub==",subId);
    const account =singleData?.account_view



  useEffect(() => {
    dispatch(SingleViewApi({data:id,subId}))

  
}, [])




  return (
    <div className="main-single-view">
      <Container>
        <Row>
          <Col md={9}>
            <Card className="single-view-header">
              <Row>
                <Col md={6}>
                  <div className="single-view-profile-parent d-flex justify-content-around">
                    <img
                      className="single-view-profile-pic"
                      src={c3logo}
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={6}>
                  {" "}
                  <div className="single-view-rating d-flex justify-content-around ">
                    <ReactStars size={35}></ReactStars>
                  </div>{" "}
                </Col>
              </Row>
            </Card>
            <Card className="single-view-banner">
              <Row className="single-view-banner-row">
                <Col md={6}>
                  <div className="single-view-text">
                    <h5 className="single-view-title"> {account?.team_name}</h5>
                    <div className="single-view-p-tag">
                      <p className="single-view-time">
                        Work time: <span>{account?.work_time}</span>
                      </p>
                      <p>
                        Place: <span>{account?.place}</span>
                      </p>
                      <p>
                        Email:<span>{account?.email}</span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="anwae">
                    <Card className="single-view-btn-card">
                      <div>
                        <Link to={'/connectus'}>
                        <Button className="single-view-connect-btn">
                          Connect US
                        </Button></Link>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Card>
            <Card className="single-view-body">
              <Row>
                <h5 style={{ fontSize: "15px" }}>Overview</h5>
                <p>
                 {account?.over_view}
                </p>
                <h5 style={{ fontSize: "15px" }}>Address</h5>
                <p>
                  {account?.address}
                </p>
                <h5 style={{ fontSize: "15px" }}>Service offerd</h5>
                <p>
                {singleData?.service_name}
                </p>
                <h5 style={{ fontSize: "15px" }}>photos</h5>

                <Row>
                  <Col md={2}>
                    <div className="d-flex  ">
                      {/* {

                    singleData.profile.map((item)=>{
                      return(
                        <img className="singleview-image" src={item.more_photos} alt="" />
                       

                      )
                    })
                      } */}
                     
                    </div>
                  </Col>
                </Row>  
              </Row>
            </Card>
            <Card className="main-review-card">
              <h5>Review</h5>
              <div className='post-review'>
                <Row className='post-main-row'>
                    <Col md={4}>
                    <input className='post-review-input'  placeholder='Write review...!' type="text" />
                    </Col>
                    <Col  md={4}>
                    <ReactStars size={30}></ReactStars>               
                    </Col>
                    <Col  md={4}>
                      <div className='d-flex justify-content-end'>

                    <Button className='post-btn'>Post</Button> 
                      </div>
                    </Col>
                        

                 

              
                    
                </Row>
               

              </div>
              <Card className="single-review-card">
                <Row >
                  <Col md={6}>
                    <div className='d-flex align-items-center'>

                    <img className='review-profile' src={avatar2} alt="" />
                    <div>
                    <h5 className="m-0 review-name">Anwarjuaid km</h5>
                    <span className="review-date">20 Aug 2023</span>

                    </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    {" "}
                    <div className="d-flex justify-content-end">
                      {" "}
                      <ReactStars size={30}></ReactStars>
                    </div>
                  </Col>
                  <hr
                      style={{
                        color: "#80808047",
                        margin: "0px",
                        height: "0",
                    
                      }}
                    />
                </Row>
                <Row>
                  <Col md={12}>
                    <p className="review-style">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Error eos nulla quae culpa voluptate dolorum debitis
                      placeat in iure quam.
                    </p>
                  </Col>
                </Row>
              </Card>
              <Card className="single-review-card">
                <Row >
                  <Col md={6}>
                    <div className='d-flex align-items-center'>

                    <img className='review-profile' src={avatar2} alt="" />
                    <div>
                    <h5 className="m-0 review-name">Anwarjuaid km</h5>
                    <span className="review-date">20 Aug 2023</span>

                    </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    {" "}
                    <div className="d-flex justify-content-end">
                      {" "}
                      <ReactStars size={30}></ReactStars>
                    </div>
                  </Col>
                  <hr
                      style={{
                        color: "#80808047",
                        margin: "0px",
                        height: "0",
                    
                      }}
                    />
                </Row>
                <Row>
                  <Col md={12}>
                    <p className="review-style">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Error eos nulla quae culpa voluptate dolorum debitis
                      placeat in iure quam.
                    </p>
                  </Col>
                </Row>
              </Card>
             
             
            </Card>
          </Col>

          <Col md={3}>
            <h1 style={{ backgroundColor: "gray", minHeight: "100vh" }}>2</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SingleVIewCard