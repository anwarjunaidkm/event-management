import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Container } from 'reactstrap'
import TeamLayout from '../../../Layout/Team/TeamLayout'

function Inboxview() {
  return (
    <TeamLayout>
        <div main-connectus>
        <Container>
            <div className="body-conncet">
                <Card className='conncetus-card'>
                    <h5 style={{fontSize:"14px",color:'gray',textAlign:'center',paddingBottom:"10px"}}>ConnectUS</h5>
                  

                <input className='connect-input' type="text"  placeholder='Email'/>
                <input className='connect-input' type="text"  placeholder='Subject'/>
                  
               
                
                <textarea className='connect-textarea' id="txtid" name="txtname" rows="4" cols="50" maxlength="200">
A nice day is a nice day.
Lao Tseu
</textarea>
<div className='btnConnect-parent'>

   <Link to={"/inbox"}>  <Button className='btn-connect'>Back</Button></Link>
</div>
                </Card>
            </div>
        </Container>

    </div>
    </TeamLayout>
  )
}

export default Inboxview