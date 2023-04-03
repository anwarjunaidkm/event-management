import { display } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Card, TabContainer } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { searchingApi } from '../../store/user/UserSlice';
import { c1, c2, c3 } from '../image/image';
import { location } from './location';

function Banner() {

    const {searchdata} =useSelector((state)=>state.user)

    
    
    
    const [search,setSerach] = useState()
    const [searchresult,setSerachresult] = useState()
   const dispatch = useDispatch()
   const filterSearch =searchdata.results
   console.log("foundeed==",filterSearch)
   console.log("foundeed222==",searchresult)
   

    const searchHandle = (e) => {
      setSerach({
        ...search,
        [e.target.name]: e.target.value
      })
      dispatch(searchingApi(search))



    }
    const handleSubmit = (e) => {
      e.preventDefault(e);
      dispatch(searchingApi(search))

      

    }

    useEffect(() => {

      dispatch(searchingApi(search))
    

    }, [search])
    


  return (
    <div className="banner">
      <Container>
        <div className="banner-body p-3  ">
          <Row className="pt-3">
            <Col md={6} className="d-flex align-items-center left-text-bar ">
              <div className="left-banner">
                <div className="banner-text">
                  <h2>
                    Bringing Your Ideas to Life with Expert Event Planning...!
                  </h2>
                </div>
                <div>
                  <Card className="left-search-card">
                    <select
                      name="district"
                      onChange={searchHandle}
                      className="dropdown-search"
                    >
                      <option className="dropdown-option" value={""}>
                        Location
                      </option>
                      {location.map((item) => {
                        return (
                          <option className="dropdown-option" value={item}>
                            {item}
                          </option>
                        );
                      })}

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
                    
                    

                    <button onClick={handleSubmit} className="search-butn">
                      Search
                    </button>
                  </Card>

                    {/* //SMAPLE */}

                    {filterSearch?.length >= 1 ?
                    
                    <div className='serach-result'>

                    <div className='child-search-result'>

                    
                      {/* <ul  style={{padding:"0px"}}> */}
                        {
                          filterSearch?.map((item)=>{
                            return(


                              <ul  style={{padding:"0px",margin:"10px" ,display:"flex"}}>
                                <img style={{width:"30px", }} src={item.team_profilepic} alt=""  />
                                <Link style={{ textDecoration: "none", color: "inherit" }}   to={`/singleview/${item?.id}/${item?.sub_catagory}/${item?.account}`}>  <li className='serch-li'> {item?.account_view?.team_name}</li> </Link>
                              </ul>
                            )
                          })
                        }
                      {/* </ul> */}
                      </div>
                      </div> : null
                    
                  
                  
                  
                  
                  
                  }
                 
                 
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
                  <img className="banner-cover" src={c2} alt="" />
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