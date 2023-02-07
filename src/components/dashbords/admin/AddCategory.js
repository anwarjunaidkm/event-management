import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Form } from 'reactstrap'
import AdminLayout from '../../../Layout/admin/AdminLayout'
import { AddCategoryApi } from '../../../store/admin/AdminSlice';

function AddCategory() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("");
const [imageFile, setImageFile] = useState(null);

  

  const categoryHandle= (e) =>{
    e.preventDefault()
    const data = {
      inputValue,
      imageFile,
    };
    dispatch(AddCategoryApi(data))
  }

  const handleInputChange = (e) => {
    setInputValue(

    e.target.value);
  };

  const handleImageChange = (e) => {
    setImageFile(
      
        e.target.files[0]);
  };

  // const handle =(e)=>{
  //   setInput({
  //     ...Input,
  //     [e.target.name] : e.target.value
  // });

  // }
  




  return (
    <AdminLayout>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "400px", height: "200px", margin: "30px" ,textAlign:"center" }}>
          <h5 style={{fontSize:"14px",textAlign:"center",marginTop:"14px",color:"#6a3921"}}>Add Category</h5>
          <Form onSubmit={categoryHandle}>
          <input
            type="text"
            placeholder="Enter Category Name..!"
            style={{
              outline: "none",
              border: "0",
              borderRadius: "15px",
              color: "rgb(93, 92, 92)",
              padding: "6px",
              backgroundColor: "#f8f9fa",
              margin: "10px",
              name:"sub_catagory_name",
              
              
            }}
            // onChange={(e)=>handle(e)}
            onChange={handleInputChange}
          />
          <input
            type="file"
           
            style={{
              outline: "none",
              border: "0",
              borderRadius: "15px",
              color: "rgb(93, 92, 92)",
              padding: "6px",
              backgroundColor: "#f8f9fa",
              margin: "8px",
              name:"image"
            }}
            // onChange={(e)=>handle(e)}
            onChange={handleImageChange}

          />
          {/* <select style={{

            outline: "none",
            border: "0",
            borderRadius: "15px",
            color: "rgb(93, 92, 92)",
            padding: "6px",
            backgroundColor: "#f8f9fa",
            margin: "10px",
          }}>
            <option value="actual value 2">Display Text 2</option>
            <option value="actual value 3">Display Text 3</option>
          </select> */}
          <div style={{
            display:'flex',
            justifyContent:"center",
            paddingTop:"15px"
        

          }}>

          <Button type='submit'  className='btn-connect'>ADD</Button>
          </div>
          </Form>
        </Card>
      </div>
    </AdminLayout>
  );
}

export default AddCategory