import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { c1, c2, c3, c4, c7, pic } from "../image/image";
import "./MainCategoryCard.css";

function MainCategoryCard() {
  return (
    <div className="main-category-card">
      <Container>
        <Row className="main-row">

            <div className="main-category-title">

                <h4 className="my-0 p-3">Main Categories</h4>
            </div>
         
          <Col md={3}  className="parrentCtegory" >
           
                            
                <Card className="card"  style={{ width: '15rem',height:"14rem",backgroundColor:"white" }}>
                <Card.Img  className="card-image"  variant="top" src={c1} />
                <Card.Body className="main-card-body">
                    <Card.Title className="card-title">Event Organisers</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
         
          <Col md={3}  className="parrentCtegory" >
           
                            
                <Card className="card"  style={{ width: '15rem',height:"14rem",backgroundColor:"white" }}>
                <Card.Img  className="card-image"  variant="top" src={c2} />
                <Card.Body className="main-card-body">
                    <Card.Title className="card-title">Event Organisers</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
         
          <Col md={3}  className="parrentCtegory" >
           
                            
                <Card className="card"  style={{ width: '15rem',height:"14rem",backgroundColor:"white" }}>
                <Card.Img  className="card-image"  variant="top" src={c3} />
                <Card.Body className="main-card-body">
                    <Card.Title className="card-title">Event Organisers</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
         
          <Col md={3}  className="parrentCtegory" >
           
                            
                <Card className="card"  style={{ width: '15rem',height:"14rem",backgroundColor:"white" }}>
                <Card.Img  className="card-image"  variant="top" src={c7} />
                <Card.Body className="main-card-body">
                    <Card.Title className="card-title">Event Organisers</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                
                </Card.Body>
                </Card> 
            
           
          
           
            
          </Col>
          <Col md={3}  className="parrentCtegory" >
           
                            
                <Card className="card"  style={{ width: '15rem',height:"14rem",backgroundColor:"white" }}>
                <Card.Img  className="card-image"  variant="top" src={c2} />
                <Card.Body className="main-card-body">
                    <Card.Title className="card-title">Event Organisers</Card.Title>
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

