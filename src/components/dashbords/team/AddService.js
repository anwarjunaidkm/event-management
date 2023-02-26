import React from 'react'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { Button, Card } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MainCategoryApi } from '../../../store/mainCategory/MainCategorySlice';
import { ToastContainer } from 'react-toastify';
import { AddserviceApi } from '../../../store/team/TeamSlice';
import { useState } from 'react';
import UpdateModalService from './UpdateModalService';

function AddService() {
  const dispatch=useDispatch()

  const {categoryList} = useSelector((state) => state.Category);
  const tableData =categoryList.results;
  console.log("tabledta===",tableData);

  const [inputValue, setInputValue] = useState("");
  const [subValue, setSubValue] = useState("");
  console.log("drop====",subValue);



  const ServiceHandle= (e) =>{
    e.preventDefault()
    const data = {
      inputValue,
      subValue,
    };
    dispatch(AddserviceApi(data))
  }

  const handleInputChange = (e) => {
    setInputValue(
     

    e.target.value);
  };
  const handleSubValue = (e) => {
    setSubValue(
    e.target.value);
  };

useEffect(() => {
  dispatch(MainCategoryApi())
  
},[]) 
  return (
    <TeamLayout>
     
        <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={ServiceHandle}>
        <Card style={{ width: "400px", height: "200px", margin: "30px" ,textAlign:"center" }}>
          <h5 style={{fontSize:"14px",textAlign:"center",marginTop:"14px",color:"#6a3921"}}>Add Service</h5>
          <ToastContainer />
          <input
            type="text"
            placeholder="Enter Service Name..!"
            onChange={handleInputChange}
            style={{
              outline: "none",
              border: "0",
              borderRadius: "15px",
              color: "rgb(93, 92, 92)",
              padding: "6px",
              backgroundColor: "#f8f9fa",
              margin: "10px",
            }}
          />

         
          <select onChange={handleSubValue}  style={{

            outline: "none",
            border: "0",
            borderRadius: "15px",
            color: "rgb(93, 92, 92)",
            padding: "6px",
            backgroundColor: "#f8f9fa",
            margin: "10px",
        }}>
             {tableData?.map((item,key)=>{
    return(

      <option value={item.id}>{item.sub_catagory_name}</option>
    )
            
})}
          </select>
          <div style={{
            display:'flex',
            justifyContent:"center",
            paddingTop:"10px"
        

          }}>

          <Button type='submit' className='btn-connect'>ADD</Button>
          </div>
        </Card>
          </form>
      </div>

    </TeamLayout>
  )
}

export default AddService