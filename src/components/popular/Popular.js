import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Card, Col, Container, Row } from 'reactstrap';
import { c1, c1logo, c2logo, c3logo, c4logo, c5logo, c6logo } from '../image/image';
import "./Popular.css";

function Popular() {
  return (
    <div className='popular-main'>
        <Container>
        <div className="main-category-title">
            <h4 className="my-0 p-3">Most Popular</h4>
          </div>
        <Row className='popular-row'>
            <Col className='popular-card-parent-col' md={2}>
              <Card className='popular-card' style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
             <img className="popular-image" variant="top" src={c1logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>  


              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c2logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c3logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c4logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c5logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c6logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c6logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>



        </Row>
        </Container>
    </div>
  )
}

export default Popular