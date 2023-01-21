import { minHeight } from '@mui/system';
import React from 'react'
import ReactStars from 'react-rating-stars-component';

import { Button, Card, Col, Container, Row } from 'reactstrap'
import { c1, c1logo, c2, c2logo, c3logo } from '../image/image'
import "./SingleviewCard.css"



function SingleVIewCard() {
  return (
    <div className="main-single-view">
      <Container>

    <Row>
    <Col md={9}>

        <Card className='single-view-header'>
       
          <Row >
            <Col md={6}>
                <div className='single-view-profile-parent d-flex justify-content-around'><img className='single-view-profile-pic' src={c3logo} alt="" /></div>
            </Col>
            <Col md={6}> <div className='single-view-rating d-flex justify-content-around '><ReactStars size={35}></ReactStars></div> </Col>
          </Row>
          </Card>
        <Card className='single-view-banner'>
        <Row className='single-view-banner-row'>
          <Col md={6}>
          <div className='single-view-text'>
            <h5 className='single-view-title'> Casata events</h5>
            <div className='single-view-p-tag'>
               <p className='single-view-time'>Work time: <span>9:00 AM -9:00 PM</span></p>
             <p>Place: <span>Malappuram</span></p>
            <p>Email:<span>sample@outlook.com</span></p>

            </div>

         
          </div>
          </Col>
          <Col md={6}>
            <div className='anwae'>

            <Card className='single-view-btn-card'>
                <div>

                    <Button className='single-view-connect-btn'>Connect US</Button>
                </div>
            
            </Card>
            </div>
           
           </Col>
        </Row>
        </Card>
        <Card className='single-view-body'>
        <Row>
           
          <h5 style={{fontSize:"15px"}}>Overview</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            adipisci explicabo dolores esse, perspiciatis accusamus!
          </p>
          <h5 style={{fontSize:"15px"}}>Address</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            adipisci explicabo dolores esse, perspiciatis accusamus!
          </p>
          <h5 style={{fontSize:"15px"}}>Service offerd</h5>
          <h5 style={{fontSize:"15px"}}>photos</h5>
          
          <Row>
            <Col  md={2}>
                <div className='d-flex  '>
              <img className="singleview-image" src={c1} alt="" />
              <img className="singleview-image" src={c1} alt="" />
              </div>
            </Col>
            
          </Row>
        </Row>
        </Card>
     </Col>
     
     <Col md={3}>
     <h1 style={{ backgroundColor: "gray", minHeight:"100vh" }}>2</h1>
     </Col>
    </Row>
      </Container>
    </div>
  );
}

export default SingleVIewCard