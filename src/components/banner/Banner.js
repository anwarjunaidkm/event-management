import React from 'react'
import { Card, TabContainer } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'reactstrap';
import { c1, c2, c3 } from '../image/image';

function Banner() {
  return (
    <div className="banner">
      <Container>
        <div className="banner-body p-3  ">
          <Row className="pt-3">
            <Col md={6} className="d-flex align-items-center left-text-bar ">
              <div className="left-banner">
                <div className="banner-text">
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia..!!!,
                  </h2>
                </div>
                <div>
                 

                  <Card className="left-search-card">
                    <select className="dropdown-search">
                        <option
                          className="dropdown-option"
                          value="actual value 1"
                        >
                          Location
                        </option>
                        <option value="actual value 2">Display Text 2</option>
                        <option value="actual value 3">Display Text 3</option>
                      </select>
                            
                       
                    <div>  
                        <input
                          className="search_input"
                          type="text"
                          name=""
                          placeholder="Search...."
                        />
                    </div>

                    
                        <button className="search-butn">Search</button>
                        
                  </Card>

                </div>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-md-end align-items-center banner-right-side"
            >
               
              <Card className="right-card">
{/* ---------------gridview-------------- */}
                {/* <Row>
                    <Col>
                    <img className='banner-cover' src={c2} alt="" />
                    </Col>
                    <Col>
                        <h1>2</h1>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <h1>3</h1>
                    </Col>
                    <Col>
                    <img className='banner-cover' src={c2} alt="" />
                    </Col>

                </Row> */}
{/* ---------------end gridview-------------- */}


                <div>
                    <img className='banner-cover' src={c2} alt="" />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Banner