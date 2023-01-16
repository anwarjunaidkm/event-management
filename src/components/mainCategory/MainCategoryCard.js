import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./MainCategoryCard.css";

function MainCategoryCard() {
  return (
    <div className="main-category-card">
      <Container>
        <Row className="main-row">

            <div className="main-category-title">

                <h4 className="my-0 p-3">Main Categories</h4>
            </div>
          <Col md={2}  className="parrentCtegory" >
           
                            
                <Card className="card"  style={{ width: '10rem',height:"14rem",backgroundColor:"#578777" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body className="main-card-body">
                    <Card.Title className="card-title">Event Organisers</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
          <Col md={2}  className="parrentCtegory" >
                         
          <Card   style={{ width: '10rem',height:"14rem" ,backgroundColor:'#feb958'}}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body className="main-card-body">
                    <Card.Title>Corporate Parties</Card.Title>
                    <Card.Text>
                   
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
          <Col md={2}  className="parrentCtegory" >
          <Card   style={{ width: '10rem',height:"14rem",backgroundColor:"#971e1f" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body className="main-card-body">
                    <Card.Title>Party Services</Card.Title>
                    <Card.Text>
                   
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
          <Col md={2}  className="parrentCtegory" >
          <Card   style={{ width: '10rem',height:"14rem",backgroundColor:"#3db477" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body className="main-card-body">
                    <Card.Title>Party Rentals</Card.Title>
                    <Card.Text>
                   
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
          <Col md={2}  className="parrentCtegory" >
          <Card   style={{ width: '10rem',height:"14rem",backgroundColor:"#f0a6aa" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body className="main-card-body">
                    <Card.Title >Wedding Planners</Card.Title>
                    <Card.Text>
                   
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
          <Col md={2}  className="parrentCtegory"  >
          <Card   style={{ width: '10rem',height:"14rem",backgroundColor:'#9575cd' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body className="main-card-body">
                    <Card.Title>Show Events</Card.Title>
                    <Card.Text>
                   
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
         
          
        </Row>
      </Container>
    </div>
  );
}

export default MainCategoryCard;

