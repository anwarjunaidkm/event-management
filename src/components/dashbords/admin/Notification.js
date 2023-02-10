import { padding } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Button, Card } from 'reactstrap'
import AdminLayout from '../../../Layout/admin/AdminLayout'
import { NotificationApi } from '../../../store/admin/AdminSlice';

function Notification() {
  const dispatch=useDispatch()
  const [notification,setNotification]=useState()
  const [sub,setSub]=useState()
console.log(notification);

  const handle =(e)=>{
    setNotification(
      e.target.value
    )
  }
  const Subhandle =(e)=>{
    setSub(
      e.target.value
    )
  }

  const PublishNotification =(e)=>{
    e.preventDefault()
   
    dispatch(NotificationApi({notification,sub}))

  }



  return (
    <AdminLayout>
        

        
    
        

        <div style={{display:'flex',justifyContent:"center", }}>
        <Card style={{width:'400px',height:"300px" ,margin :"30px",}} >
            
        <ToastContainer />
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
              
              

        }} 
        onChange={Subhandle}
         className='' type="text"  placeholder='Subject'/>
            

            

          
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
        onChange={handle}
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
          <Button onClick={(e)=>PublishNotification(e)} className="btn-connect">Publish</Button>
        </div>
        </Card>
        </div>
        
        
     
     
    </AdminLayout>
  );
}

export default Notification