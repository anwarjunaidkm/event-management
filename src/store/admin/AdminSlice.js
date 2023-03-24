import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
        try{


        const formData = new FormData();
        formData.append("sub_catagory_name", inputValue);
        formData.append("image", imageFile);
        const res = await axiosApi.post("/store/subcatagory/", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });
          toast.success(" added successful!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme:"colored"
          });
        

        return res
        }catch(error){
            toast.error("Failed. Please try again.", {
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

export const NotificationApi = createAsyncThunk(
    "admin/NotificationApi",
    async(data)=>{
        console.log("nofiiiiiii===",data);
        try{

            const res= await axiosApi.post("/store/notification/",{"notification":data.notification,"subject":data.sub})
            console.log("nofication====",res.data);
            toast.success(" Notification Published..!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
              });
            

        }catch(error){
            toast.error("Failed. Please try again.", {
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

    //------------ delete single user-----------

    export const userDeleteApi =createAsyncThunk(
        "admin/userDeleteApi",
        async(data)=>{
            console.log({data});
        
            const res = await axiosApi.delete(`/projectaccount/userslist/${data}/`)

            return res.data
        }
    )
    //------------ delete team user-----------

    export const TeamDeleteApi =createAsyncThunk(
        "admin/TeamDeleteApi",
        async(data)=>{
            console.log({data});
        
            const res = await axiosApi.delete(`projectaccount/event_management_users/${data}`)

            return res.data
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
        //-------notification---------------
        
        [NotificationApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [NotificationApi.fulfilled]:(state,action)=>{
            state.loading=false
            console.log("success");
            
        },
        [NotificationApi.rejected]:(state,action)=>{
            console.log("faild");
        },


        //---------delete single user----------

        [userDeleteApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [userDeleteApi.fulfilled]:(state,action)=>{
            state.loading=false
            toast.success("Successful!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
            });
           
           
           
            console.log("success");
        },
        [userDeleteApi.rejected]:(state,action)=>{
            console.log("faild");
            toast.error(" failed. Please try again.", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
              });
        },
        //---------delete single team----------

        [TeamDeleteApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [TeamDeleteApi.fulfilled]:(state,action)=>{
            state.loading=false
            toast.success("Successful!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
            });
           
           
           
            console.log("success");
        },
        [TeamDeleteApi.rejected]:(state,action)=>{
            console.log("faild");
            toast.error(" failed. Please try again.", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
              });
        },
        
    }
})
export const{} =AdminSlice.actions;
export default AdminSlice.reducer