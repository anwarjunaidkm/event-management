import React from 'react'
import { Button, Card, Col, Container, Row } from 'reactstrap'
import ReactStars from 'react-rating-stars-component';

import { c1logo, c2, c3logo, c5logo, c6logo, logo } from '../image/image';
import "./CompanyListCard.css";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewApi, ListCompanyApi } from '../../store/user/UserSlice';
import { useEffect } from 'react';
import { useState } from 'react';


function CompanyListCard() {

   const dispatch= useDispatch()
   const params= useParams()
   const [cname,setCname]= useState()
   console.log("cname==:",cname);

   const sub_catagory =params.id

   const {listCompany} = useSelector((state) => state.user);
   console.log("list of companyyyyy===",listCompany);
 

  
   
   useEffect(() => {
       dispatch(ListCompanyApi(sub_catagory))
   
     
   }, [])


   
  return (
    <div className="company-list-card">
      <Container>
       
        <Row className=''>
          <Col md={9}>
          <div className='d-flex justify-content-between align-items-center'>
            <div className="main-category-title">
              {listCompany && listCompany.length > 0 &&
                (

                  <h4 className="my-0 p-3">{listCompany[0].sub_catagory_name}</h4>
                  


                
              )}
                </div>
                <div><Button>Filter</Button></div>  
        </div>
        {listCompany?.map((item)=>{
          return (
            <Card className="comapny-list-single-card">
              <Row className="align-items-center">
                <Col>
                  <div className="company-list-icon-parent">
                    <img className="compnay-list-icon" src={item?.team_profilepic} alt="" />
                  </div>
                </Col>
                <Col>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/singleview/${item?.id}/${item?.sub_catagory}/${item?.account}`}
                  >
                    {" "}
                    <h5 className="company-list-company-name">
                      {item.account_view.team_name}
                    </h5>
                  </Link>

                  <p className="m-0">
                    {" "}
                    {item?.account_view.place}
                    <br></br>
                    {item?.account_view?.address}
                  </p>
                  <p className="work-time">
                    Work time:{item?.account_view?.work_time}
                  </p>
                </Col>
                <Col>
                  <Row>
                    <Col className="btn-parrent">
                      <ReactStars
                        isHalf={true}
                        edit={false}
                        value={item?.avg_ratings}
                        size={30}
                      ></ReactStars>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="btn-parrent">
                      <Link
                        to={
                           `/enquiryform/${item?.id}`
                        
                        }
                      >
                        {" "}
                        <Button className="enquiry-btn">Enquiry</Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          );
        })}
           
           
           
          </Col>
          <Col className='right-company-list' md={3}>
            {/* <h1 style={{ backgroundColor: "blue" }}>2</h1> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CompanyListCard