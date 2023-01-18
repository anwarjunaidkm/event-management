import React from 'react'
import { Card, TabContainer } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'reactstrap';

function Banner() {
  return (
    <div className="banner">
      <Container>
        <div className="banner-body p-3  ">
          <Row className="pt-3">
            <Col md={6} className="d-flex align-items-center ">
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
                          placeholder="Search..."
                        />
                    </div>

                    
                        <button className="search-butn">Search</button>
                        
                  </Card>

                </div>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-md-end align-items-center"
            >
              <Card className="right-card "></Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Banner