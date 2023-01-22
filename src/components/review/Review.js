import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import "./Review.css"

function Review() {
  return (
    <div className='main-review'>
    <Container>
        <Row>
            <Col md={9}>
                <Card className='review-border-card'>  

                </Card>
            </Col>
            <Col md={3}>
            <h1 style={{ backgroundColor: "blue", minHeight:"auto" }}>2</h1>

            </Col>

        </Row>
        

    </Container>
    </div>
  )
}

export default Review