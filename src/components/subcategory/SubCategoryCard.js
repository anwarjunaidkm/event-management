import React from 'react'
import { Card, CardTitle, Col, Container, Row } from 'reactstrap';
import { c1, c2logo, c7, sub1, sub2, sub3, sub4 } from '../image/image';
import "./SubCategory.css";

function SubCategoryCard() {
  return (
    <div className="sub-category-card">
      <Container>
        <div className="sub-category-title">
          <h4 className="my-0 p-3">Event Organisers</h4>
        </div>
        <Row className='sub-row'>
          <Col md={3} className="sub-category-col">
            <Card
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <img className="sub-image" variant="top" src={sub1} />
              <CardTitle className="sub-category-title-card">
                Birthday Party Organisers
              </CardTitle>
            </Card>
          </Col>
          <Col md={3} className="sub-category-col">
            <Card
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <img className="sub-image" variant="top" src={sub4} />
              <CardTitle className="sub-category-title-card">
              Party & Wedding Flower Decorators
              </CardTitle>
            </Card>
          </Col>
          <Col md={3} className="sub-category-col">
            <Card
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <img className="sub-image" variant="top" src={sub2} />
              <CardTitle className="sub-category-title-card">
              Balloon Decorators
              </CardTitle>
            </Card>
          </Col>
          <Col md={3} className="sub-category-col">
            <Card
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <img className="sub-image" variant="top" src={sub3} />
              <CardTitle className="sub-category-title-card">
              Stage Decorators
              </CardTitle>
            </Card>
          </Col>
          <Col md={3} className="sub-category-col">
            <Card
              style={{
                width: "15rem",
                height: "14rem",
                backgroundColor: "white",
              }}
            >
              <img className="sub-image" variant="top" src={c7} />
              <CardTitle className="sub-category-title-card">
                Birthday Party Organisers
              </CardTitle>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SubCategoryCard