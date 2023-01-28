import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { c1, c2, c3, c4, c5, c7, mic, rent } from "../image/image";
import Popular from "../popular/Popular";
import "./MainCategoryCard.css";

function MainCategoryCard() {
  return (
    <div className="main-category-card">
      <Container>
          <div className="main-category-title">
            <h4 className="my-0 p-3">Main Categories</h4>
          </div>
        <Row className="main-row">

          <Col md={3} className="parrentCtegory">
          <Link style={{textDecoration:"none"}} to={"/listcompany"}> 
            <Card
              className="card"
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <Card.Img className="card-image" variant="top" src={c1} />
              <Card.Body className="main-card-body">
                <Card.Title className="card-title">Event Organisers</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            </Link> 
          </Col>

          <Col md={3} className="parrentCtegory">
            <Card
              className="card"
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <Card.Img className="card-image" variant="top" src={c2} />
              <Card.Body className="main-card-body">
                <Card.Title className="card-title">Corporate Parties</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="parrentCtegory">
            <Card
              className="card"
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <Card.Img className="card-image" variant="top" src={c3} />
              <Card.Body className="main-card-body">
                <Card.Title className="card-title">Party Services</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="parrentCtegory">
            <Card
              className="card"
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <Card.Img className="card-image" variant="top" src={rent} />
              <Card.Body className="main-card-body">
                <Card.Title className="card-title">Party Rentals</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="parrentCtegory">
            <Card
              className="card"
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <Card.Img className="card-image" variant="top" src={c2} />
              <Card.Body className="main-card-body">
                <Card.Title className="card-title">Wedding Planners</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="parrentCtegory">
            <Card
              className="card"
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <Card.Img className="card-image" variant="top" src={mic} />
              <Card.Body className="main-card-body">
                <Card.Title className="card-title">Show Events</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      
      </Container>
    </div>
  );
}

export default MainCategoryCard;

