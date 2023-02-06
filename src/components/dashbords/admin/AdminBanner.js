import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardBody, CardHeader, CardText, Container,Card,CardTitle, Col, Button, Row } from 'reactstrap'
import AdminLayout from '../../../Layout/admin/AdminLayout'
import { AllevenTeamApi, AllusersApi } from '../../../store/admin/AdminSlice'
import { avatar2, dash111, dash222, team, user } from '../../image/image'
import "./AdminBanner.css"

function AdminBanner() {

  const dispatch = useDispatch()

  const {alleventtTeam} = useSelector((state) => state.admin);
  const {allusersList} = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(AllusersApi())
     
   }, [])
   useEffect(() => {
    dispatch(AllevenTeamApi())
     
   }, [])

  return (
   <AdminLayout>
     <Row style={{padding:"10px" }}>
      <Col md={4}>

      <Card style={{ minHeight: "100px", minWidth: "350px" }}>
            <Row>
              <Col md={12}>
                <div className="top-section-card-admin">
                  <h5 className="banner-welcome-admin">Welcome..Admin..!!</h5>
                </div>
              </Col>
            </Row>
          </Card>
           







        
      </Col>
      <Col md={8}>
      <Row>
            <Col md={6}>
              <Card className='top-radius-banner-admin' style={{ minHeight: "100px", minWidth: "300px" }}>
                  <Row>
                    <Col md={6}>
                      <h3 className='dashbord-banner-title-admin'>Number of User</h3>
                        <h5 className='dashbord-banner-title-admin'>{allusersList.length}</h5>
                    </Col>
                    <Col md={6}>
                      <div className='icon-banner-parent-admin'>

                      <img className='dashicon-size-admin' src={user} alt="" />
                      </div>

                    </Col>
                  </Row>

              </Card>
            </Col>
            <Col md={6}>
            <Card className='top-radius-banner-admin' style={{ minHeight: "100px", minWidth: "300px" }}>
                  <Row>
                    <Col md={6}>
                      <h3 className='dashbord-banner-title-admin'>Number of Team </h3>
                        <h5 className='dashbord-banner-title-admin'>{alleventtTeam.length}</h5>
                    </Col>
                    <Col md={6}>
                      <div className='icon-banner-parent-admin'>

                      <img className='dashicon-size-admin' src={team} alt="" />
                      </div>

                    </Col>
                  </Row>

              </Card>
            </Col>
          </Row>

      </Col>





     </Row>
       
   </AdminLayout>
  )
}

export default AdminBanner