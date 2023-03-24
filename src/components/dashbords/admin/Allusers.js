import React from 'react'
import { useEffect } from 'react'
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { Card, Container, Table } from 'reactstrap'
import AdminLayout from '../../../Layout/admin/AdminLayout'
import { AllusersApi, userDeleteApi } from '../../../store/admin/AdminSlice'
import "./Allusers.css"

function Allusers() {
   const dispatch = useDispatch() 
   const {allusersList} = useSelector((state) => state.admin);

   console.log("userlist====",allusersList.results);

    const deleteUserHandler = (id) => {
      dispatch(userDeleteApi(id)).then(() => {
        dispatch(AllusersApi());
      });
    };

   useEffect(() => {
    dispatch(AllusersApi())
     
   }, [])
   
  return (
      <AdminLayout>
              <ToastContainer />

       

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
    {allusersList?.results?.map((item,key)=>{

return(
<tr>
<th scope="row">
  {key+1}
</th>
<td>
  {item?.full_name
}
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

  <AiOutlineDelete style={{cursor:'pointer'}} color="brown"  onClick={()=>{deleteUserHandler(item?.id)}} size={20}  /> 
</div>
{/* <div style={{paddingLeft:"10px"}}>

  <BsPencil />
</div>
<div style={{paddingLeft:"10px"}}>

 <AiFillEye size={20} />
</div> */}
</td>
</tr>

)  })}
    
   
   
  </tbody>
</Table>

        </Card>
       
    </AdminLayout>
  )
}

export default Allusers