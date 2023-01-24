import React from 'react'
import { Button, Card } from 'reactstrap'
import AdminLayout from '../../../Layout/admin/AdminLayout'

function AddCategory() {
  return (
    <AdminLayout>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "400px", height: "200px", margin: "30px" ,textAlign:"center" }}>
          <h5 style={{fontSize:"14px",textAlign:"center",marginTop:"14px",color:"#6a3921"}}>Add Category</h5>

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
            }}
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
            paddingTop:"10px"
        

          }}>

          <Button className='btn-connect'>ADD</Button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}

export default AddCategory