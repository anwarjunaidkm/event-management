import React from 'react'
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { Card, Container, Table } from 'reactstrap'
import AdminLayout from '../../../Layout/admin/AdminLayout'
import "./Allusers.css"

function Allusers() {
  return (
      <AdminLayout>
       

            <h5 style={{color:"#6a3921"}}>All Users</h5>
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
        FullName
      </th>
      <th>
        UserName
      </th>
      <th>
        Email
      </th>
      <th>
        Phone
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
      <td>
        97979797979
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
       
    </AdminLayout>
  )
}

export default Allusers