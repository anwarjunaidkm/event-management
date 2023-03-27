import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import AdminLayout from '../../../Layout/admin/AdminLayout'
import { TeamSingleviewApi } from '../../../store/admin/AdminSlice'
import { c3logo } from '../../image/image'
import "./EventteamSingle.css"

function EventTeamSingle() {
    const dispatch= useDispatch()
    const params =useParams()
    console.log(params.id);

    const {singlteamData} = useSelector((state) => state.admin);
    console.log({singlteamData});

    useEffect(() => {
        dispatch(TeamSingleviewApi(params.id))
      
    
     
    },[])
    

    
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
                        
                    
                    }}>{singlteamData?.team_name}</h4>
                    <span style={{
                         color:"#986248",


                    }}>{singlteamData?.work_time}</span>
                </Row>
                <Row>
                   <h5 style={{
                    color:"gray",
                    fontSize:"15px"

                   }}>Overview</h5>
                   <p> {singlteamData?.over_view}</p>
                </Row>
                <Row>
                   <h5 style={{
                    color:"gray",
                    fontSize:"15px"

                   }}>Service</h5>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
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
                <input readOnly className='admin-input-boxstyle' value={singlteamData?.username} type="text" />
                </Col>
            </Row>
            <Row>
                <Col className='admin-single-form'>
                
                Email
                </Col>
                <Col className='admin-single-form'>
                <input   readOnly className='admin-input-boxstyle' value={singlteamData?.email} type="text" />
                </Col>
            </Row>
            <Row>
                <Col className='admin-single-form'>
                Phone
                </Col>
                <Col className='admin-single-form'>
                <input  readOnly className='admin-input-boxstyle' value={singlteamData?.phone} type="text" />
                </Col>
            </Row>
            <Row>
                <Col className='admin-single-form'>
                Address
                </Col>
                <Col className='admin-single-form'>
                <textarea  readOnly  style={{width:"193px",height:"70px"}} value={singlteamData?.address} className='admin-input-boxstyle' name="" id="" cols="30" rows="10"></textarea>
                </Col>
            </Row>
            <Row>
                <Col className='admin-single-form'>
                Place
                </Col>
                <Col className='admin-single-form'>
                <input   readOnly className='admin-input-boxstyle' value={singlteamData?.place} type="text" />
                
                </Col>
            </Row>

        </Card>
        </Col>
     </Row>
     {/* <Row>
        <Col md={12}>
        <h1 style={{backgroundColor:"yellow"}}>3</h1>
        </Col>
        
     </Row> */}
     </div>
    </AdminLayout>
  )
}

export default EventTeamSingle