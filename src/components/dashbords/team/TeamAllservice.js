import React from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { Card, Container, Table } from 'reactstrap'

function TeamAllservice() {
  return (
   <TeamLayout>
    
    <h5 style={{color:"#6a3921"}}>All Services</h5>
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
        Service Name
      </th>
      <th>
       Category
      </th>
     
      <th>
        Date
      </th>
      <th>
        Action
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

       <AiFillEye size={20} />
      </div>
      </td>
    </tr>
   
   
  </tbody>
</Table>

        </Card>
       

   </TeamLayout>
  )
}

export default TeamAllservice