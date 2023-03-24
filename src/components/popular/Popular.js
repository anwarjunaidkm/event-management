import React, { useEffect } from 'react'
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'reactstrap';
import { popularApi } from '../../store/user/UserSlice';
import { c1, c1logo, c2logo, c3logo, c4logo, c5logo, c6logo } from '../image/image';
import "./Popular.css";

function Popular() {
  const dispatch = useDispatch()
  const {popularData} = useSelector((state) => state.user);
  console.log("popularrrrrrData",popularData.results);
   const popularTable = popularData?.results

  useEffect(() => {
    
    dispatch(popularApi())
  
    
  }, [])
  
 
  




 
     


  return (
    <div className='popular-main'>
        <Container>
        <div className="main-category-title">
            <h4 className="my-0 p-3">Most Popular</h4>
          </div>
        <Row className='popular-row'>
              {
                popularTable?.map((item)=>{
                  return(
                    <Col className='popular-card-parent-col' md={''} sm={''}>

                    <Card className='popular-card' style={{
                      width: "10rem",
                      height: "12rem",
                      backgroundColor: "white",
                    }}>
                 <img className="popular-image" variant="top" src={item?.team_profilepic} />
                      <div className='popular-card-body'>
                      <Link style={{ textDecoration: "none", color: "inherit" }}   to={`/singleview/${item?.id}/${item?.sub_catagory}/${item?.account}`}>       <span className="tag tag-teal">Popular</span></Link>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             
                      </p>
                      <ReactStars isHalf={true}
                        edit={false}
                        value={item?.avg_ratings} ></ReactStars>
                          
                          </div>  
      
      
                    </Card>
                   </Col>
                    
                  )
                })

                

              }
             


            {/* <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c2logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c3logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c4logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c5logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c6logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col>
            <Col className='popular-card-parent-col' md={2}>
              <Card style={{
                width: "10rem",
                height: "12rem",
                backgroundColor: "white",
              }}>
                 <img className="popular-image" variant="top" src={c6logo} />
                <div className='popular-card-body'>
                <span className="tag tag-teal">Popular</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       
                </p>
                <ReactStars ></ReactStars>
                    
                    </div>

              </Card>
            </Col> */}



        </Row>
        </Container>
    </div>
  )
}

export default Popular