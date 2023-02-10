import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Container } from 'reactstrap'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { inboxSingleView } from '../../../store/team/TeamSlice';

function Inboxview() {
  const {inboxsingle} = useSelector((state) => state.team);
  console.log("single inboxxxxx===",inboxsingle);


  const dispatch=useDispatch()
  const params= useParams()
  useEffect(() => {
      dispatch(inboxSingleView(params.id))
  
    
  }, [])

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