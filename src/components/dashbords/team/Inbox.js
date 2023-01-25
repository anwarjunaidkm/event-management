import React from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { TfiReload } from 'react-icons/tfi'
import { Card, Container, Table } from 'reactstrap'
import { Link } from 'react-router-dom'

function Inbox() {
  return (
    <TeamLayout>  <h5 style={{color:"#6a3921"}}>Inbox</h5>
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
   Email
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
<tr>
  <th scope="row">
    1
  </th>
  <td>
    Mark
  </td>
  <td>
    Otto
  </td>
  <td>
   aj@outlook.com
  </td>
  
  <td className='d-flex p-2'>
    <div>

    <AiOutlineDelete size={20}  />
  </div>
  <div style={{paddingLeft:"10px"}}>

    <BsPencil />
  </div>
  <div style={{paddingLeft:"10px"}}>

 <Link to={"/inboxview"}> <AiFillEye color='brown' size={20} /></Link> 
  </div>
  </td>
</tr>


</tbody>
</Table>

    </Card>

    </TeamLayout>
  )
}

export default Inbox