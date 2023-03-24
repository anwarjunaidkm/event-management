import React, { useState } from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { Card, Container, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AllserviceApi, deleteServicApi } from '../../../store/team/TeamSlice'
import UpdateModalService from './UpdateModalService'
import { ToastContainer } from 'react-toastify'

function TeamAllservice() {
  const dispatch = useDispatch() 
  const {allservice} = useSelector((state) => state.team);
  console.log("allservicee====",allservice);


  const [modalService,setModalService] = useState(false)
  const [onUpdateModalService,setOnUpdateModalService] = useState({})
  console.log(onUpdateModalService);

const UpdateService =(item)=>{
  setModalService(true)
  setOnUpdateModalService(item)



}

const deleteUserHandler = (id) => {
  dispatch(deleteServicApi(id)).then(() => {
    dispatch(AllserviceApi());
  });
};

  
  useEffect(() => {
    dispatch(AllserviceApi())
     
   }, [])


  return (
   <TeamLayout>
       <ToastContainer />
     <UpdateModalService
      show={modalService}
      data ={onUpdateModalService}
      onCloserClick={()=>setModalService(false)}
      />
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
    { allservice?.map((item,key)=>{

      return(

        <tr>
        <th scope="row">
          {key+1}
        </th>
        <td>
          {item.service_name}
        </td>
        <td>
          {item.sub_catagory_name}
        </td>
        <td>
         2023/10/10
        </td>
        
        <td className='d-flex p-2'>
          <div>
  
          <AiOutlineDelete style={{cursor:"pointer"}}   color='brown' onClick={()=>{deleteUserHandler(item?.id)}} size={20}  />
        </div>
        <div style={{paddingLeft:"10px"}}>
  
          <BsPencil style={{cursor:"pointer"}}  color='brown' onClick={()=>UpdateService(item)} />
        </div>
        <div style={{paddingLeft:"10px"}}>
  
       
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

export default TeamAllservice