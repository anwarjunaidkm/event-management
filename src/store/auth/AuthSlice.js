import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosApi from "../AxiosInstance";


//-------------------------login-----------------------------
   export const LoginApi = createAsyncThunk(
    "login/LoginApi",
        async (data)=>{
            try{
           
            const res = await axiosApi.post("/projectaccount/login/",data.data);
            toast.success("Login successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
              });
            
                

           
           
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
             

            
            }
            catch(error){
                toast.error("Login failed. Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme:"colored"
                  });

            }

        }
   ) 
   //<<<<<-------------logout--------------------------------->>>>>

   export const LogoutApi =createAsyncThunk(
    "login/logout",
    async(data)=>{
        console.log("datalout==",data);
        const res=axiosApi.post("/auth/token/logout/")
        console.log(res);
        if (res) {
            sessionStorage.clear();
            localStorage.clear();
             data.navigate("/");
             
            }
        
        
    }

   )
//  <<<<<<<<---------------slice start------------------------------------------------------->>>>>
        const INITIAL_STATE ={
        
            loading:false,
            isLoggedIn:false


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
            state.isLoggedIn=true
            console.log("success");
        },
        [LoginApi.rejected]:(state,action)=>{
            console.log("faild");
        },
    //------------------------logout-----------------
        [LogoutApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [LogoutApi.fulfilled]:(state,action)=>{
            state.loading=false
            state.isLoggedIn=false
            console.log("success");
        },
        [LogoutApi.rejected]:(state,action)=>{
            console.log("faild");
        },

        
    }
   
 })

 export const {}=AuthSlice.actions;
 export default AuthSlice.reducer