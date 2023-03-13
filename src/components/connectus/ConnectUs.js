import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Button, Card, Container } from 'reactstrap'
import { postInboxApi } from '../../store/user/UserSlice'
import "./ConnectUs.css"

function ConnectUs() {
  const params =useParams()
  const dispatch= useDispatch()
  const navigate = useNavigate()
  console.log(params.id);
  const id = params.id

  const [input,setInput] = useState()

const handle = (e) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
};

console.log("contact====",input);

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(postInboxApi({data:input,id,navigate }))
  }





  return (
    <div main-connectus>
        <Container>
        <ToastContainer />

              <form onSubmit={handleSubmit}>
            <div className="body-conncet">
                <Card className='conncetus-card'>
                    <h5 style={{fontSize:"14px",color:'gray',textAlign:'center',paddingBottom:"10px"}}>ConnectUS</h5>
                  

                <input className='connect-input' type="text" onChange={handle} name='email'  placeholder='Email'/>
                <input className='connect-input' type="text"  onChange={handle} name='subject' placeholder='Subject'/>
                  
               
                
                <textarea className='connect-textarea' onChange={handle} id="txtid"  name="message" rows="4" cols="50" maxLength="200">
A nice day is a nice day.
Lao Tseu
</textarea>
<div className='btnConnect-parent'>

{/* <Link to={"/singleview"}>   <Button className='btn-connect' style={{margin:"3px"}}>Back</Button></Link> */}
   <Button  type='submit' style={{margin:"3px"}} className='btn-connect'>Send</Button>
</div>
                </Card>
            </div>
                </form>
        </Container>

    </div>
  )
}

export default ConnectUs
