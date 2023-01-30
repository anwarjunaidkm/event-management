import React from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { CardBody, CardHeader, CardText, Container,Card,CardTitle, Row, Col, Button } from 'reactstrap'
import { minWidth } from '@mui/system'
import "./TeamBanner.css"
import { dash111, dash222, dash333, dash444 } from '../../image/image'

function TeamBanner() {
  return (
    <TeamLayout>
      <Row style={{padding:"10px" }}>
        <Col md={4}>
          <Card style={{ minHeight: "200px", minWidth: "350px" }}>
            <Row>
              <Col md={12}>
                <div className="top-section-card">
                  <h5 className="banner-welcome">Welcome..back..!!</h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h3 className="title-banner-team">Casata Event</h3>
              </Col>
              <Col md={6}>
                <div className="m-3">
                  <Button className="btn-profile" variant="primary" size="sm">
                    Change Profile
                  </Button>{" "}
                  <Button className="btn-profile" variant="secondary" size="sm">
                    Add More Pic
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/*------------ right section card--------------- */}
        <Col md={8}>
          <Row>
            <Col md={6}>
              <Card className='top-radius-banner' style={{ minHeight: "100px", minWidth: "300px" }}>
                  <Row>
                    <Col md={6}>
                      <h3 className='dashbord-banner-title'>Number of Services</h3>
                        <h5 className='dashbord-banner-title'>15</h5>
                    </Col>
                    <Col md={6}>
                      <div className='icon-banner-parent'>

                      <img className='dashicon-size' src={dash111} alt="" />
                      </div>

                    </Col>
                  </Row>

              </Card>
            </Col>
            <Col md={6}>
            <Card className='top-radius-banner' style={{ minHeight: "100px", minWidth: "300px" }}>
                  <Row>
                    <Col md={6}>
                      <h3 className='dashbord-banner-title'>Number of Enquiry </h3>
                        <h5 className='dashbord-banner-title'>15</h5>
                    </Col>
                    <Col md={6}>
                      <div className='icon-banner-parent'>

                      <img className='dashicon-size' src={dash222} alt="" />
                      </div>

                    </Col>
                  </Row>

              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <Card className='botton-radius-banner' style={{ minHeight: "100px", minWidth: "300px" }}>
                  <Row>
                    <Col md={6}>
                      <h3 className='dashbord-banner-title'>Notification </h3>
                        <h5 className='dashbord-banner-title'>15</h5>
                    </Col>
                    <Col md={6}>
                      <div className='icon-banner-parent'>

                      <img className='dashicon-size' src={dash444} alt="" />
                      </div>

                    </Col>
                  </Row>

              </Card>
            </Col>
            <Col md={6}>
            <Card className='botton-radius-banner' style={{ minHeight: "100px", minWidth: "300px" }}>
                  <Row>
                    <Col md={6}>
                      <h3 className='dashbord-banner-title'>Inbox </h3>
                        <h5 className='dashbord-banner-title'>15</h5>
                    </Col>
                    <Col md={6}>
                      <div className='icon-banner-parent'>

                      <img className='dashicon-size' src={dash333} alt="" />
                      </div>

                    </Col>
                  </Row>

              </Card>

            </Col>
          </Row>
        </Col>
      </Row>
    </TeamLayout>
  );
}

export default TeamBanner