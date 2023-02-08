import React from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'

import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { TfiReload } from 'react-icons/tfi'
import { Card, Container, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { EnquiryApi } from '../../../store/team/TeamSlice'

function Enquiry() {
  const dispatch = useDispatch() 
  const {allenquiry} = useSelector((state) => state.team);
  console.log("allenquiry====",allenquiry);

  useEffect(() => {
    dispatch(EnquiryApi())
     
   }, [])
  return (
    <TeamLayout>
        <h5 style={{color:"#6a3921"}}>Enquiries</h5>
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
       Name
      </th>
      <th>
      Phone
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
    {allenquiry.map((item,key)=>{
      return(

        <tr>
      <th scope="row">
        {key+1}
      </th>
      <td>
        {item.name}
      </td>
      <td>
        {item.phone}
      </td>
      
      <td>
       {item.created_at}
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
   




      )
    })}
    
   
  </tbody>
</Table>

        </Card>
    </TeamLayout>
  )
}

export default Enquiry