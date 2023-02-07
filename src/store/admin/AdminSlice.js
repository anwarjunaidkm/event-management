import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../AxiosInstance";


//<<<-----------------all users-------------->>>>
export const AllusersApi =createAsyncThunk(
    "admin/AllusersApi",
    async(data)=>{
        const res = await axiosApi.get("/projectaccount/userslist/")
        // console.log("allusersADMIN=====",res.data);
        return res.data
    }
)
//-----------all team-----------------------
export const AllevenTeamApi =createAsyncThunk(
    "admin/AllevenTeamApi",
    async(data)=>{
        const res = await axiosApi.get("/projectaccount/event_management_users/")
        console.log("all-Team=====",res.data);
        return res.data
    }
)
//-<<-----------add category------------------------->>
export const AddCategoryApi = createAsyncThunk(
    "admin/AddCategoryApi",
    async({inputValue,imageFile})=>{


        const formData = new FormData();
        formData.append("sub_catagory_name", inputValue);
        formData.append("image", imageFile);
        const res = await axiosApi.post("/store/subcatagory/", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });

        return res
    
    }
)



const INITIAL_STATE ={
        
    loading:false,
    allusersList:[],
    alleventtTeam:[],
   

  

}

const AdminSlice =createSlice({
    name:"admin",
    initialState:INITIAL_STATE,
    reducers:{},
    extraReducers:{

        [AllevenTeamApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [AllevenTeamApi.fulfilled]:(state,action)=>{
            state.loading=false
            state.alleventtTeam =  action.payload;
           
            console.log("success");
        },
        [AllevenTeamApi.rejected]:(state,action)=>{
            console.log("faild");
        },
        //------all suer---------------------
        [AllusersApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [AllusersApi.fulfilled]:(state,action)=>{
            state.loading=false
            state.allusersList =  action.payload;
           
            console.log("success");
        },
        [AllusersApi.rejected]:(state,action)=>{
            console.log("faild");
        },
        //---------add category--------

        [AddCategoryApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [AddCategoryApi.fulfilled]:(state,action)=>{
            state.loading=false
            console.log("success");
            
        },
        [AddCategoryApi.rejected]:(state,action)=>{
            console.log("faild");
        },
        
    }
})
export const{} =AdminSlice.actions;
export default AdminSlice.reducer