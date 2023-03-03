import React, { useState } from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { CardBody, CardHeader, CardText, Container,Card,CardTitle, Row, Col, Button } from 'reactstrap'
import { minWidth } from '@mui/system'
import "./TeamBanner.css"
import { aj, ava, avatar, c1logo, c2logo, c3logo, dash111, dash222, dash333, dash444 } from '../../image/image'
import { addPicApi, addProPicApi, AllserviceApi, EnquiryApi, getPicApi, getProPicApi, inboxApi, meApi, ViewnotifictionApi } from '../../../store/team/TeamSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function TeamBanner() {

  const dispatch= useDispatch()
  const [previewImage, setPreviewImage] = useState(null);
  const {allservice} = useSelector((state) => state.team);
  const {viewNotification} = useSelector((state) => state.team);
  const {allenquiry} = useSelector((state) => state.team);
  const {inbox} = useSelector((state) => state.team);
  const {me} = useSelector((state) => state.team);
  const {getpic} = useSelector((state) => state.team);


  ///just view the profie not redy some issue found soo pause
  const profilePicUrl = getpic[0]?.team_profile;

  console.log("picccccccccccccc===",profilePicUrl);



  useEffect(() => {
    dispatch(ViewnotifictionApi())
     
  }, [])
  useEffect(() => {
    dispatch(AllserviceApi())
     
   }, [])
   useEffect(() => {
    dispatch(EnquiryApi())
     
   }, [])
   useEffect(() => {
    dispatch(inboxApi())
  
   
  }, [])

  useEffect(() => {
    dispatch(meApi())
  
   
  }, [])
  useEffect(() => {
    dispatch(getProPicApi())
  
   
  }, [])


  const handleFileInputChange = (e) => {
    const file = e.target.files && e.target.files[0];
    // const file = e.target.files?.[0];
    console.log("file",file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewImage(reader.result);
        
      }
    } else {
      console.log("No file selected");
    }
  }

  console.log("prev==",previewImage);

  const PicAddHandle= (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("team_profile", e.target.profile_pic.files[0]);
    // formData.append("team_profile", previewImage);
    dispatch(addProPicApi(formData));
  }

 


  return (
    <TeamLayout>
              <ToastContainer />

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
                
                <div className='img-parent'>
                  
                   

                        <img className='team-banner-avatar' src={profilePicUrl} alt="error" />
                      
                    
                  
                  { previewImage && 
                  <img type="file" className='team-banner-avatar' accept="image/png,image/jpeg" src={previewImage} alt={aj}></img>

                  }
                </div>
                <h3 className="title-banner-team">{me?.username}</h3>
                {/* <p>{me?.data?.email}</p> */}
              </Col>
              <Col md={6}>
                <div className="m-3">
                <form onSubmit={PicAddHandle}>
                <input className='profile-file' type="file" name='profile_pic' onChange={handleFileInputChange} />

                  <Button  type='submit' className="btn-profile" variant="primary" size="sm">
                    Change Profile
                  </Button>{" "}
                <Link to={"/addmorepic"}>  <Button  className="btn-profile" variant="secondary" size="sm">
                    Add More Pic
                  </Button></Link>
                  </form>
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
                        <h5 className='dashbord-banner-title'>{allservice.length}</h5>
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
                        <h5 className='dashbord-banner-title'>{allenquiry.length}</h5>
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
                        <h5 className='dashbord-banner-title'>{viewNotification.length}</h5>
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
                        <h5 className='dashbord-banner-title'>{inbox.length}</h5>
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