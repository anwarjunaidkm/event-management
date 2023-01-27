import React from 'react'
import { Button, Card, Col, Container, Row } from 'reactstrap'
import ReactStars from 'react-rating-stars-component';

import { c1logo, c2, c3logo, c5logo, c6logo, logo } from '../image/image';
import "./CompanyListCard.css";
import { Link } from 'react-router-dom';


function CompanyListCard() {
  return (
    <div className="company-list-card">
      <Container>
       
        <Row className=''>
          <Col md={9}>
          <div className='d-flex justify-content-between align-items-center'>
            <div className="main-category-title">
                    <h4 className="my-0 p-3">Wedding event</h4>
                </div>
                <div><Button>Filter</Button></div>  
        </div>
            <Card className='comapny-list-single-card'>
              <Row className='align-items-center'>
                <Col>
                    <div className='company-list-icon-parent'>
                        
                    <img className='compnay-list-icon' src={c5logo} alt="" />
                    </div></Col>
                <Col>

              <Link to={"/singleview"}>  <h5 className='company-list-company-name'>CASATA EVENTS</h5></Link>
                
                <p className='m-0'> Malappuram hill <br></br>Second street vilayil 673641</p>
                <p className='work-time'>Work time: 9:00 AM-8:00 PM</p>
                
                </Col>
                <Col>
                  <Row>
                    <Col className='btn-parrent'> 
                    <ReactStars  size={30}></ReactStars>
                    </Col>
                  </Row>
                  <Row >
                    <Col className='btn-parrent'><Link to={"/enquiryform"}> <Button className='enquiry-btn'>Enquiry</Button></Link>
                </Col>
                  </Row>
                  
                   
                </Col>
              </Row>
            </Card>
            <Card className='comapny-list-single-card'>
              <Row className='align-items-center'>
                <Col>
                    <div className='company-list-icon-parent'>
                        
                    <img className='compnay-list-icon' src={c1logo} alt="" />
                    </div></Col>
                <Col>
                <h5 className='company-list-company-name'>CASATA EVENTS</h5>
                
                <p className='m-0'> Malappuram hill <br></br>Second street vilayil 673641</p>
                <p className='work-time'>Work time: 9:00 AM-8:00 PM</p>
                
                </Col>
                <Col>
                  <Row>
                    <Col className='btn-parrent'> 
                    <ReactStars  size={30}></ReactStars>
                    </Col>
                  </Row>
                  <Row >
                    <Col className='btn-parrent'> <Button className='enquiry-btn'>Enquiry</Button>
                </Col>
                  </Row>
                  
                   
                </Col>
              </Row>
            </Card>
            <Card className='comapny-list-single-card'>
              <Row className='align-items-center'>
                <Col>
                    <div className='company-list-icon-parent'>
                        
                    <img className='compnay-list-icon' src={c3logo} alt="" />
                    </div></Col>
                <Col>
                <h5 className='company-list-company-name'>CASATA EVENTS</h5>
                
                <p className='m-0'> Malappuram hill <br></br>Second street vilayil 673641</p>
                <p className='work-time'>Work time: 9:00 AM-8:00 PM</p>
                
                </Col>
                <Col>
                  <Row>
                    <Col className='btn-parrent'> 
                    <ReactStars  size={30}></ReactStars>
                    </Col>
                  </Row>
                  <Row >
                    <Col className='btn-parrent'> <Button className='enquiry-btn'>Enquiry</Button>
                </Col>
                  </Row>
                  
                   
                </Col>
              </Row>
            </Card>
            <Card className='comapny-list-single-card'>
              <Row className='align-items-center'>
                <Col>
                    <div className='company-list-icon-parent'>
                        
                    <img className='compnay-list-icon' src={c6logo} alt="" />
                    </div></Col>
                <Col>
                <h5 className='company-list-company-name'>CASATA EVENTS</h5>
                
                <p className='m-0'> Malappuram hill <br></br>Second street vilayil 673641</p>
                <p className='work-time'>Work time: 9:00 AM-8:00 PM</p>
                
                </Col>
                <Col>
                  <Row>
                    <Col className='btn-parrent'> 
                    <ReactStars  size={30}></ReactStars>
                    </Col>
                  </Row>
                  <Row >
                    <Col className='btn-parrent'> <Button className='enquiry-btn'>Enquiry</Button>
                </Col>
                  </Row>
                  
                   
                </Col>
              </Row>
            </Card>
           
          </Col>
          <Col md={3}>
            <h1 style={{ backgroundColor: "blue" }}>2</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CompanyListCard