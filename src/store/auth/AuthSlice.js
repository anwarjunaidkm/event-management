import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../AxiosInstance";

   export const LoginApi = createAsyncThunk(
    "login/LoginApi",
        async (Input)=>{
            const res = await axiosApi.post("/projectaccount/login/",Input);
            console.log(res);
            return res.data

        }
   ) 
//  ---------------slice start----------
        const INITIAL_STATE ={
            loginInfo:{},
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
        },
        [LoginApi.fulfilled]:(state,action)=>{
            state.loading=false
            console.log("SUCCESS");
        },
        [LoginApi.rejected]:(state,action)=>{
            console.log("SUCCESS");
        },
    }
   
 })

 export const {}=AuthSlice.actions;
 export default AuthSlice.reducer