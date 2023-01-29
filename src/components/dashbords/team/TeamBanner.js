import React from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { CardBody, CardHeader, CardText, Container,Card,CardTitle, Row, Col, Button } from 'reactstrap'
import { minWidth } from '@mui/system'
import "./TeamBanner.css"

function TeamBanner() {
  return (
    <TeamLayout>
         <div>
          <Card style={{minHeight:"200px",maxWidth:"400px"}} >
          <Row>
            <Col md={12}>
              <div className='top-section-card'>
               

                 <p>wlecome</p>
              </div>
        
            </Col>
           
            
          
        <Row>
          <Col md={4}>
           <h5>CASTA Event</h5>
          </Col>
          <Col md={4}>
           <Button>ChangeProfile</Button>
          </Col>
          <Col md={4}>
          <Button>AddPicture</Button>
            
          </Col>
        </Row>

        </Row>
          
        </Card>

         </div>

    </TeamLayout>
  )
}

export default TeamBanner