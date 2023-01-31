import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../AxiosInstance";

   export const LoginApi = createAsyncThunk(
    "login/LoginApi",
        async (data)=>{
            const res =await axiosApi.post("/projectaccount/login/",username,password);
            console.log(res);

        }
   ) 
//  ---------------slice start----------
 const AuthSlice = createSlice({
    name:"login",
    initialState:{
        loginInfo:{}

    },
    reducers:{
        Login: (state,action)=>{
            state.loginInfo.push(action.payload);
        }
    },
    extraReducers:{}
   
 })