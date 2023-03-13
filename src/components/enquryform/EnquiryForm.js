import React, { useState } from 'react'
import { HiX } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Button, Card, Container } from 'reactstrap'
import { PostEnquiryApi } from '../../store/user/UserSlice'
import Header from '../header/Header'

function EnquiryForm() {
  const dispatch =useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const [enquryData,setEnquryData] =useState()
  console.log(params.id);
  const id = params.id

const handle =(e)=>{
  setEnquryData({
    ...enquryData,

    [e.target.name]: e.target.value,
  });
}
console.log("input",enquryData);






  

  const EnquiryHandle= (e) =>{
    e.preventDefault()
   
    dispatch(PostEnquiryApi({data:enquryData,navigate,id}))
  }

  return (
    <>
    
    
    <Header />
    <Container>
    <ToastContainer />

    <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={EnquiryHandle}>
        <Card style={{ width: "400px", height: "auto", margin: "30px" ,textAlign:"center" }}>
          <h5 style={{fontSize:"14px",textAlign:"center",marginTop:"14px",color:"#6a3921"}}>Enquiry</h5>
          <input
            type="text"
            placeholder="Enter Name..!"
            name ="name"
            onChange={handle}
            style={{
              outline: "none",
              border: "0",
              borderRadius: "15px",
              color: "rgb(93, 92, 92)",
              padding: "6px",
              backgroundColor: "#f8f9fa",
              margin: "10px",
            }}
          />
          <input
            type="number"
            placeholder="Enter Phone..!"
            onChange={handle}
            name='phone'
            style={{
              outline: "none",
              border: "0",
              borderRadius: "15px",
              color: "rgb(93, 92, 92)",
              padding: "6px",
              backgroundColor: "#f8f9fa",
              margin: "8px",
            }}
          />
          <span style={{
                fontSize: "10px",
                fontWeight: "lighter",
                color:"#b51111",
          }}>We will respond within 30 min</span>
          {/* <select style={{

            outline: "none",
            border: "0",
            borderRadius: "15px",
            color: "rgb(93, 92, 92)",
            padding: "6px",
            backgroundColor: "#f8f9fa",
            margin: "10px",
          }}>
            <option value="actual value 2">Display Text 2</option>
            <option value="actual value 3">Display Text 3</option>
          </select> */}
          <div style={{
            display:'flex',
            justifyContent:"center",
            paddingTop:"15px"
        

          }}>

        {/* <Link to={"/listcompany"}>  <Button style={{marginBottom:"6px",margin:"5px"}} className='btn-connect'>Back</Button></Link> */}
          <Button  type='submit' style={{marginBottom:"6px",margin:"5px"}} className='btn-connect'>Send</Button>
          </div>
        </Card>
          </form>
      </div>

    
    </Container>
    </>
  )
}

export default EnquiryForm