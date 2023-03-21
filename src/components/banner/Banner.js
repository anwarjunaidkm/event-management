import React, { useState } from 'react'
import { Card, TabContainer } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { searchingApi } from '../../store/user/UserSlice';
import { c1, c2, c3 } from '../image/image';

function Banner() {

   const [search,setSerach] = useState()
   const dispatch = useDispatch()
   console.table(search)

    const searchHandle = (e) => {
      setSerach({
        ...search,
        [e.target.name]: e.target.value
      })

    }
    const handleSubmit = (e) => {
      e.preventDefault(e);
      dispatch(searchingApi(search))

    }

  return (
    <div className="banner">
      <Container>
        <div className="banner-body p-3  ">
          <Row className="pt-3">
            <Col md={6} className="d-flex align-items-center left-text-bar ">
              <div className="left-banner">
                <div className="banner-text">
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia..!!!,
                  </h2>
                </div>
                <div>
                 

                  <Card className="left-search-card">
                    <select name='district' onChange={searchHandle} className="dropdown-search">
                        <option
                          className="dropdown-option"
                          value=""
                        >
                          Location
                        </option>
                        <option value="Alappuzha">Alappuzha</option>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Idukki">Idukki</option>
                        <option value="Kannur">Kannur</option>
                        <option value="Kasaragod">Kasaragod</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Palakkad">Palakkad</option>
                        <option value="Pathanamthitta">Pathanamthitta</option>
                        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Wayanad">Wayanad</option>
                      </select>
                            
                       
                    <div>  
                        <input
                          className="search_input"
                          type="text"
                          name="search"
                          placeholder="Search...."
                          onChange={searchHandle}
                        />
                    </div>

                    
                        <button onClick={handleSubmit} className="search-butn">Search</button>
                        
                  </Card>

                </div>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-md-end align-items-center banner-right-side"
            >
               
              <Card className="right-card">
{/* ---------------gridview-------------- */}
                {/* <Row>
                    <Col>
                    <img className='banner-cover' src={c2} alt="" />
                    </Col>
                    <Col>
                        <h1>2</h1>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <h1>3</h1>
                    </Col>
                    <Col>
                    <img className='banner-cover' src={c2} alt="" />
                    </Col>

                </Row> */}
{/* ---------------end gridview-------------- */}


                <div>
                    <img className='banner-cover' src={c2} alt="" />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Banner