import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Card, Modal } from 'reactstrap'
import { AllserviceApi, updateServiceApi } from '../../../store/team/TeamSlice';

function UpdateModalService({show,data, onCloserClick}) {
    const [store, setStore] = useState  ('');
        const dispatch = useDispatch()
        const navigate = useNavigate()




    useEffect(() => {
        if (data?.service_name) {
          setStore(data.service_name);
        }
      }, [data]);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStore(value);
      };
    
      const handleInputBlur = () => {
        if (store.trim() === '') {
          setStore('');
        }
      };

      const handleUpdate =(e)=>{
        e.preventDefault()
    //    dispatch(LoginApi({data: Input,navigate}))
       dispatch(updateServiceApi({inputs:data, store,navigate}))
       dispatch(AllserviceApi())

      }




    
    

   
   


  




  return (
    <div><Modal  isOpen={show} toggle={onCloserClick} centered={true}>
                   <ToastContainer />
        <div className="modal-header">
     

            <h5 style={{color:"#6a3921"}} className="modal-title mt-0">Update Service</h5>
            <button
              type="button"
              onClick={onCloserClick}
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleUpdate} >
        <Card style={{ width: "400px", border:"none", height: "200px", margin: "30px" ,textAlign:"center",boxShadow:"none" }}>
          {/* <h5 style={{fontSize:"14px",textAlign:"center",marginTop:"14px",color:"#6a3921"}}>Update Service</h5> */}
        
          <input
            type="text"
            placeholder="Enter Service Name..!"
           
            name="service_name"
            value= {store}   
            // onChange={(e)=>Handle(e)}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
           
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
        
          <input
            type="text"
            placeholder="Enter Service Name..!"
            value={data.sub_catagory_name}
            readOnly
           
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

         
          
          <div style={{
            display:'flex',
            justifyContent:"center",
            paddingTop:"10px"
        

          }}>

          <Button type='submit' style={{outlin:"none", border:"none"}} className='btn-connect'>Update</Button>
          </div>
        </Card>
          </form>
      </div>

        </Modal>
        </div>
  )
}

export default UpdateModalService