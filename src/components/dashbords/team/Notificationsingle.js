import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'reactstrap'
import TeamLayout from '../../../Layout/Team/TeamLayout'

function Notificationsingle() {
  return (
    <TeamLayout>
        
        <div style={{display:'flex',justifyContent:"center", }}>
        <Card style={{width:'400px',height:"300px" ,margin :"30px",}} >
            

        <input style={{
              outline:"none",
              border:'0',
              borderRadius:"15px",
              border: "0",
              margin: "8px",
              padding:"6px",
              backgroundColor:"#f8f9fa",
              color: "rgb(93, 92, 92)",
              marginBottom:"0"
              

        }} className='' type="text"  placeholder='Subject'/>
            

            

          
        <textarea style={{
            outline:"none",
            border:'0',
            borderRadius:"15px",
            border: "0",
            margin: "8px",
            padding:"6px",
            backgroundColor:"#f8f9fa",
            color: "rgb(93, 92, 92)"
            
        }}
          className=""
          id="txtid"
          name="txtname"
          rows="8"
          cols="50"
          maxlength="200"
        >
          A nice day is a nice day. Lao Tseu
        </textarea>
      
    
        <div className="btnConnect-parent">
       <Link to={"/viewnotification"}>
       <Button className="btn-connect">Back</Button>
       </Link>
        </div>
        </Card>
        </div>
        
        

    </TeamLayout>
  )
}

export default Notificationsingle