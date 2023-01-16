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
                    Maxime mollitia, molestiae qua vel sint commodi..!
                  </h2>
                </div>
                <div>
                  <div className="searchbar">
                    <input
                      className="search_input"
                      type="text"
                      name=""
                      placeholder="Search..."
                    />
                    <button className='search-butn'>Search</button>
                    
                  </div>
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