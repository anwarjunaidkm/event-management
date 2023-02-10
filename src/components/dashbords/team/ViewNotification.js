import React, { useEffect } from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { TfiReload } from 'react-icons/tfi'
import { Card, Container, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ViewnotifictionApi } from '../../../store/team/TeamSlice'

function ViewNotification() {
      const dispatch= useDispatch()
      const {viewNotification} = useSelector((state) => state.team);
      console.log("viewnotificationonn====",viewNotification);
    
      useEffect(() => {
        dispatch(ViewnotifictionApi())
      
       
      }, [])
      

  return (
   <TeamLayout>
    <h5 style={{color:"#6a3921"}}>View Notification</h5>
    <Card className='allusers-card' style={{margin:"18px",borderRadius:"10px"}} >
    
<Table  
responsive
>
<thead>
<tr>
  <th>
    #
  </th>
 
  <th>
 Subject
  </th>
 
  <th>
    Date
  </th>
  <th style={{paddingRight:"10px"}}>
    Action  <div style={{paddingInline:"10px",display:"inline-block" }}>
        <div>< TfiReload /></div></div>
  </th>
</tr>
</thead>
<tbody>
  {viewNotification?.map((item,key)=>{
    return (
      <tr>
        <th scope="row">{key + 1}</th>
        <td>{item.subject}</td>
        <td>{item.date}</td>

        <td className="d-flex p-2">
          <div>
            <AiOutlineDelete size={20} />
          </div>
          {/* <div style={{paddingLeft:"10px"}}>

    <BsPencil />
  </div> */}
          <div style={{ paddingLeft: "10px" }}>
            <td>
            <Link to={`/notificationsingle/${item?.id}`}>
              {" "}
              <AiFillEye color="brown" size={20} />
            </Link>
            </td>
          </div>
        </td>
      </tr>
    );
  })}

</tbody>
</Table>

    </Card>



   </TeamLayout>
  )
}

export default ViewNotification