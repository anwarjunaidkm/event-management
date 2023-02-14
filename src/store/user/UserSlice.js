import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosApi from "../AxiosInstance";



//<<-------------user regisrtion----------------->>>
 export const CreateUserApi =createAsyncThunk(
    "user/CreateUserApi",
    async(data)=>{
        try{
      
      
        const res =await axiosApi.post("/projectaccount/register/",data.new)
        console.log("userrREGI===",res);
        if(res?.data)
        {

            toast.success("Successful!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
            });
            data.navigate("/login")
            
        }
    }
        catch(error){
            toast.error(" failed. Please try again.", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
              });
            
        }
        
    }
  )

  //<---------team regisetoin--------->>>

 export const CreateTeamApi =createAsyncThunk(
    "user/CreateTeamApi",
    async(data)=>{
        try{
        const res = await axiosApi.post("/projectaccount/event_team_register/",data.team)
        console.log(res.data.response)
        if(res?.data)
        {
                
            data.navigate("/login")
            toast.success("Successful!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
            });
            
        }
       }
       catch(error){
            // alert(res.data.response)
            toast.error(" failed. Please try again.", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
              });
            
            
        }
        

    }
  )

//-------post enqueyyyy not compleet--------------------
 export const  PostEnquiryApi = createAsyncThunk(
    "user/PostEnquiryApi",
    async(data)=>{
        try{

            const res =await axiosApi.post("/store/enquiry/")
            // console.log(res.data);
        }catch(error){


        }
    }
 )
 //--------------------list comapny---------------
 export const ListCompanyApi = createAsyncThunk(
    "user/ListCompanyApi",
    async(sub_catagory)=>{
        const res = await axiosApi.get("/store/service/",{
            params:{
                sub_catagory:sub_catagory,
            }
        })
        console.log("list===",res);
        return res.data
    }
 )




//<<-------------slice siart------------------->>>
const INITIAL_STATE ={
    loading:false,
    listCompany:[],

}
const UserSlice =createSlice({
    name:"user",
    initialState:INITIAL_STATE,
    reducers:{},
    extraReducers:{

        [CreateUserApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [CreateUserApi.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("success");
        },
        [CreateUserApi.rejected]:(state,action)=>{
            state.loading=false;
            console.log("failed");
        },
        //---------team regisration---------

        [CreateTeamApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [CreateTeamApi.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("success");
        },
        [CreateTeamApi.rejected]:(state,action)=>{
            state.loading=false;
            console.log("failed");
        },
        //---------enquriryy form post---------

        [PostEnquiryApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [PostEnquiryApi.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("success");
        },
        [PostEnquiryApi.rejected]:(state,action)=>{
            state.loading=false;
            console.log("failed");
        },
        //---------all companyyy list---------

        [ListCompanyApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [ListCompanyApi.fulfilled]:(state,action)=>{
            state.loading=false;
            state.listCompany =  action.payload;
            console.log("success");

        },
        [ListCompanyApi.rejected]:(state,action)=>{
            state.loading=false;
            console.log("failed");
        }
    }
    
})
export const {} =UserSlice.actions;
export default  UserSlice.reducer;