import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import axiosApi from "../AxiosInstance";



//<<-------------user regisrtion----------------->>>
 export const CreateUserApi =createAsyncThunk(
    "registration/CreateUserApi",
    async(data)=>{
      
      
        const res =await axiosApi.post("/projectaccount/register/",data.new)
        console.log("userrREGI===",res);
        if(res?.data)
        {

            data.navigate("/login")
            
        }
        else{
            alert(res.status)
            
        }
        
    }
  )

  //<---------team regisetoin--------->>>

 export const CreateTeamApi =createAsyncThunk(
    "registration/CreateTeamApi",
    async(data)=>{
        const res = await axiosApi.post("/projectaccount/event_team_register/",data.team)
        console.log(res.data.response)
        if(res?.data)
        {

            data.navigate("/login")
            
        }
        else{
            alert(res.data.response)
            
        }
        

    }
  )




//<<-------------slice siart------------------->>>
const INITIAL_STATE ={
    loading:false,

}
const UserSlice =createSlice({
    name:"registration",
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
        }
    }
    
})
export const {} =UserSlice.actions;
export default  UserSlice.reducer;