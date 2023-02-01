import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../AxiosInstance";

   export const LoginApi = createAsyncThunk(
    "login/LoginApi",
        async (data)=>{
            console.log(data);
            const res = await axiosApi.post("/projectaccount/login/",data.data);
            console.log(res.data);
            if(res?.data?.token)
            sessionStorage.setItem('token',res.data.token);
            sessionStorage.setItem('role',res.data.role);
             switch(res?.data?.role){
                case "admin":
                    return data.navigate("/admindash")
                case "customer":
                    return data.navigate("/")
                case "event_management":
                    return data.navigate("/teamdash")
                    default: return data.navigate("/")
             }
            
            return res

        }
   ) 
//  ---------------slice start----------
        const INITIAL_STATE ={
        
            loading:false,

        }
 const AuthSlice = createSlice({
    name:"login",
    initialState:INITIAL_STATE,
    reducers:{
        // Login: (state,action)=>{
        //     state.loginInfo.push(action.payload);
        // }
    },
    extraReducers:{
        
        // ----------------Login--------------

        [LoginApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [LoginApi.fulfilled]:(state,action)=>{
            state.loading=false
            console.log("success");
        },
        [LoginApi.rejected]:(state,action)=>{
            console.log("faild");
        },
    }
   
 })

 export const {}=AuthSlice.actions;
 export default AuthSlice.reducer