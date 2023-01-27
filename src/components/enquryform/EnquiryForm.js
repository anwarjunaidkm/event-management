import React from 'react'
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Button, Card, Container } from 'reactstrap'
import Header from '../header/Header'

function EnquiryForm() {
  return (
    <>
    
    
    <Header />
    <Container>
    <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "400px", height: "auto", margin: "30px" ,textAlign:"center" }}>
          <h5 style={{fontSize:"14px",textAlign:"center",marginTop:"14px",color:"#6a3921"}}>Enquiry</h5>

          <input
            type="text"
            placeholder="Enter Name..!"
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

        <Link to={"/listcompany"}>  <Button style={{marginBottom:"6px",margin:"5px"}} className='btn-connect'>Back</Button></Link>
          <Button  style={{marginBottom:"6px",margin:"5px"}} className='btn-connect'>Send</Button>
          </div>
        </Card>
      </div>

    
    </Container>
    </>
  )
}

export default EnquiryForm