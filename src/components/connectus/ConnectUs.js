import React from 'react'
import { Button, Card, Container } from 'reactstrap'
import "./ConnectUs.css"

function ConnectUs() {
  return (
    <div main-connectus>
        <Container>
            <div className="body-conncet">
                <Card className='conncetus-card'>
                    <h5 style={{fontSize:"14px",color:'gray',textAlign:'center',paddingBottom:"10px"}}>ConnectUS</h5>
                  

                <input className='connect-input' type="text"  placeholder='Email'/>
                  
               
                
                <textarea className='connect-textarea' id="txtid" name="txtname" rows="4" cols="50" maxlength="200">
A nice day is a nice day.
Lao Tseu
</textarea>
<div className='btnConnect-parent'>

     <Button className='btn-connect'>Send</Button>
</div>
                </Card>
            </div>
        </Container>

    </div>
  )
}

export default ConnectUs
