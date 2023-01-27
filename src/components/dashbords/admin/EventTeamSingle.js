import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import AdminLayout from '../../../Layout/admin/AdminLayout'
import { c3logo } from '../../image/image'
import "./EventteamSingle.css"

function EventTeamSingle() {
  return (
    <AdminLayout>
        <div>
     <Row>
        <Col md={6}>
            
            <Card className='admin-team-singleview-name-card'>
                <Row>
                    <Col className='d-flex'>
                    <img className='admin-team-singleview-avatar' src={c3logo} alt="image .pg" />
                    </Col>
                </Row>
                <Row>
                    <h4 style={{
                           color:"#665f5b",
                           fontsize:"25px",
                           fontWeight:"bolder",
                        
                    
                    }}>Casata event</h4>
                    <span style={{
                         color:"#986248",


                    }}>9:00AM -9:00PM</span>
                </Row>
                <Row>
                   <h5 style={{
                    color:"gray",
                    fontSize:"15px"

                   }}>Overview</h5>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati fuga fugit quae id quasi, maxime delectusamet consectetur adipisicing elit. Atque obcaecati fuga fugit quae id quasi, maxime delectus  sint?</p>
                </Row>
                <Row>
                   <h5 style={{
                    color:"gray",
                    fontSize:"15px"

                   }}>Service</h5>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati fuga fugit quae id quasi, maxime delectusamet consectetur adipisicing elit. Atque obcaecati fuga fugit quae id quasi, maxime delectus  sint?</p>
                </Row>

            </Card>

        </Col>
        <Col md={6}>
        <Card className='admin-team-singleview-form-card'>
       
            <Row>
                <Col  className='admin-single-form'>
                

                UserName
        
                </Col>
                <Col  className='admin-single-form'  >
                <input readOnly className='admin-input-boxstyle' value={""} type="text" />
                </Col>
            </Row>
            <Row>
                <Col className='admin-single-form'>
                
                Email
                </Col>
                <Col className='admin-single-form'>
                <input   readOnly className='admin-input-boxstyle' type="text" />
                </Col>
            </Row>
            <Row>
                <Col className='admin-single-form'>
                Phone
                </Col>
                <Col className='admin-single-form'>
                <input  readOnly className='admin-input-boxstyle' type="text" />
                </Col>
            </Row>
            <Row>
                <Col className='admin-single-form'>
                Address
                </Col>
                <Col className='admin-single-form'>
                <textarea  readOnly  style={{width:"193px",height:"70px"}} className='admin-input-boxstyle' name="" id="" cols="30" rows="10"></textarea>
                </Col>
            </Row>
            <Row>
                <Col className='admin-single-form'>
                District
                </Col>
                <Col className='admin-single-form'>
                <input   readOnly className='admin-input-boxstyle' type="text" />
                
                </Col>
            </Row>

        </Card>
        </Col>
     </Row>
     <Row>
        <Col md={12}>
        <h1 style={{backgroundColor:"yellow"}}>3</h1>
        </Col>
        
     </Row>
     </div>
    </AdminLayout>
  )
}

export default EventTeamSingle