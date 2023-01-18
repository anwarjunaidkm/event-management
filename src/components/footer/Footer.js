import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import "./Footer.css";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube} from "react-icons/ai"


function Footer() {
  return (
    <div className='footer-main'>
      <Container>
        <Row className='footer-row'>
        <Col md={4}>
          <h3 className='footer-titile' >Eventtyyyy!!</h3>
          <p className='footer-address'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 64887 india</p>
        </Col>
        <Col md={4}>
          {/* <h5 className='footer-heading'>LINKS</h5> */}
          <ul className='links-list'>
            <li className='li-list'>About</li>
          
            <li>Careers</li>
            <li>Help Center</li>
            <li>Contact Us</li>
            </ul>
        </Col>
        <Col md={4}>
          <h5 className='follow'>FOLLOW US</h5>
              <div className='d-flex my-20' >
                <div className='social-padding'>

                <AiOutlineFacebook  size={25}/>
                </div>
                <div  className='social-padding'>

               <AiOutlineYoutube  size={25}/>
                </div>
                <div  className='social-padding'>

               <AiOutlineInstagram size={25} />
                </div>
              </div>
        </Col>
        </Row>



      </Container>
       
    </div>
  )
}

export default Footer