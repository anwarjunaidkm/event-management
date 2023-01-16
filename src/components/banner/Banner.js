import React from 'react'
import { TabContainer } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'reactstrap';

function Banner() {
  return (
   
      <div className="banner">
         <Container>
        <div className='banner-body'>
            <Row>
                <Col md={6}>
                    <h1>rleft</h1>
                </Col>
                <Col md={6}>
                    <h1>right</h1>
                </Col>

            </Row>
           
            

        </div>
         
         </Container>

       
      </div>
    
  );
}

export default Banner