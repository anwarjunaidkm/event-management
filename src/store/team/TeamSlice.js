import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import axiosApi from "../AxiosInstance"



//<<<<<<<<<-----ALL SERVICESS-------------->>>>
export const AllserviceApi = createAsyncThunk(
    "team/AllserviceApi",
    async(data)=>{
        const res = await axiosApi.get("/store/service/")
        // console.log("allservice====",res.data);
        return res.data
    }
)
//<<<--------------add service--------->>>

    export const AddserviceApi = createAsyncThunk(
        "team/AddserviceApi",
        async({inputValue,subValue})=>{

            // console.log("DATA==",data);
            try{

            
            const res = await axiosApi.post("/store/service/",{"service_name":inputValue,"sub_catagory":subValue})
            toast.success(" added successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
            });
            console.log("addddservice====",res);
            return res.data

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

//------------all enquiry----------->>>
    export const EnquiryApi =createAsyncThunk(
        "team/EnquiryApi",
        async(data)=>{
            try {
              const res = await axiosApi.get("/store/enquiry/");
              console.log(res.data);
              return res.data
            } catch (error) {
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


const INITIAL_STATE ={
        
    loading:false,
    allservice:[],
    allenquiry:[]
   
}
const TeamSlice = createSlice({
    name:"team",
    initialState:INITIAL_STATE,
    reducers:{},
    extraReducers:{
//-----------all service----------------->>>>>

        [AllserviceApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [AllserviceApi.fulfilled]:(state,action)=>{
            state.loading=false
            state.allservice =  action.payload;
           
            console.log("success");
        },
        [AllserviceApi.rejected]:(state,action)=>{
            console.log("faild");
        },
  //--------add servicee---------------------------

        [AddserviceApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [AddserviceApi.fulfilled]:(state,action)=>{
            state.loading=false
           
            console.log("success");
        },
        [AddserviceApi.rejected]:(state,action)=>{
            console.log("faild");
        },
    //<<<---------all enqury---------------------->>>
    
    [EnquiryApi.pending]:(state,action) =>{
        state.loading=true;
        console.log("requsted");
    },
    [EnquiryApi.fulfilled]:(state,action)=>{
        state.loading=false
        state.allenquiry =  action.payload;
       
        console.log("success");
    },
    [EnquiryApi.rejected]:(state,action)=>{
        console.log("faild");
    },



    }
})
export const {} = TeamSlice.actions;
export default TeamSlice.reducer