import React from 'react'
import AdminLayout from '../../../Layout/admin/AdminLayout'

import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { Card, Container, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { AllevenTeamApi, TeamDeleteApi } from '../../../store/admin/AdminSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

function AlleventTeam() {
  const dispatch = useDispatch() 


  const {alleventtTeam} = useSelector((state) => state.admin);
  console.log("all eventteam====",alleventtTeam);


  const deleteUserHandler = (id) => {
    dispatch(TeamDeleteApi(id)).then(() => {
      dispatch(AllevenTeamApi());
    });
  };

  useEffect(() => {
    dispatch(AllevenTeamApi())
     
   }, [])

  return (
    <AdminLayout>
            <ToastContainer />

    <h5 style={{color:"#6a3921"}}>All Eventteam</h5>
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
        TeamName
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
    {alleventtTeam?.map((item,key)=>{
      return(

        <tr>
        <th scope="row">
          {key+1}
        </th>
        <td>
          {item?.team_name}
        </td>
        <td>
        {item?.username}
        </td>
        <td>
         {item?.email}
        </td>
        <td>
          {item?.phone}
        </td>
        <td className='d-flex p-2'>
          <div>
  
          <AiOutlineDelete  style={{cursor:"pointer"}} color='brown' size={20}   onClick={()=>{deleteUserHandler(item?.id)}} />
        </div>
        {/* <div style={{paddingLeft:"10px"}}>
  
          <BsPencil />
        </div> */}
        <div style={{paddingLeft:"10px"}}>
  
      <Link to={`/eventteamsingle/${item?.id}`}>   <AiFillEye size={20} /></Link>
        </div>
        </td>
      </tr>




      )


    })}
   
   
   
  </tbody>
</Table>

        </Card>
    </AdminLayout>
  )
}

export default AlleventTeam