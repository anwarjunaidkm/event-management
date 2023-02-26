import { create } from "@mui/material/styles/createTransitions"
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
            console.log("reserror",res?.error);
            toast.success(" added successful!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
            });
            console.log("addddservice====",res);
            return res.data

        }catch(error){
            console.log("error",error?.response?.data?.error);
            toast.error(error?.response?.data?.error, {
                position: "top-right",
                autoClose: 3000,
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
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme:"colored"
                  });

            }
    }
    )
    // /--------------------view noficiation----------->>>

    export const ViewnotifictionApi = createAsyncThunk(
        "team/ViewnotifictionApi",
        async(data)=>{
            try{

                const res = await axiosApi.get("/store/notification/")
                console.log(res.data);
                return res.data
            }catch(error){
                toast.error("Failed. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme:"colored"
                  });

            }
        }
    )

    ///----------------SINGLE VIEW NOTIFICATION------------->>
     export const SingleNotificationApi = createAsyncThunk(
        "team/SingleNotificationApi",
        async(id)=>{
        console.log(id);
            const res = await axiosApi.get(`/store/notification/${id}`)
            console.log("response===",res);
            return res.data
           
        }
     )

  //----------inbox-------------------
  export const inboxApi = createAsyncThunk(
    "team/inboxApi",
    async(data)=>{
        const res = await axiosApi.get("/store/inbox/")
        console.log("inbox response==",res.data); 
        return res.data

    }

  )
   ///----------------inbox single VIEW ------------->>
   export const inboxSingleView = createAsyncThunk(
    "team/inboxSingleView",
    async(id)=>{
    console.log(id);
        const res = await axiosApi.get(`/store/inbox/${id}`)
        console.log("response===",res);
        return res.data
       
    }
 )
//    /----------------ME VIEW ------------->>
   export const meApi = createAsyncThunk(
    "team/meApi",
    async(data)=>{
        const res = await axiosApi.get(`/auth/users/me/`)
        console.log("responsse meee===",res.data);
        return res.data
       
    }
 )

 //------------service update------------------
  
   export const updateServiceApi =createAsyncThunk(
    "team/updateServiceApi",
    async(data)=>{
        console.log("updatedata",data);

    try{
        
        const res = await axiosApi.patch(`/store/service/${data.inputs.id}/?sub_catagory=${data.inputs.sub_catagory}`,{"service_name":data.store})
        console.log("updateee==",res);
        toast.success(" added successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme:"colored"
        });
        return res
    } catch{
        toast.error("try again update falid..!", {
            position: "top-right",
            autoClose: 3000,
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
    allenquiry:[],
    viewNotification:[],
    singleNotification:[],
    inbox:[],
    inboxsingle:[],
    me:[]
   
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
    //<<<---------view notificction---------------------->>>
    
    [ViewnotifictionApi.pending]:(state,action) =>{
        state.loading=true;
        console.log("requsted");
    },
    [ViewnotifictionApi.fulfilled]:(state,action)=>{
        state.loading=false
        state.viewNotification =  action.payload;
       
        console.log("success");
    },
    [ViewnotifictionApi.rejected]:(state,action)=>{
        console.log("faild");
    },
    //<<<---------single notificction---------------------->>>
    
    [SingleNotificationApi.pending]:(state,action) =>{
        state.loading=true;
        console.log("requsted");
    },
    [SingleNotificationApi.fulfilled]:(state,action)=>{
        state.loading=false
        state.singleNotification =  action.payload;
       
        console.log("success");
    },
    [SingleNotificationApi.rejected]:(state,action)=>{
        console.log("faild");
    },
    //<<<---------inbox---------------------->>>
    
    [inboxApi.pending]:(state,action) =>{
        state.loading=true;
        console.log("requsted");
    },
    [inboxApi.fulfilled]:(state,action)=>{
        state.loading=false
        state.inbox =  action.payload;
        console.log("sample==",state.inbox);
       
        console.log("success");
    },
    [inboxApi.rejected]:(state,action)=>{
        console.log("faild");
    },

     //<<<--------inboxx-single ---------------------->>>
    
     [inboxSingleView.pending]:(state,action) =>{
        state.loading=true;
        console.log("requsted");
    },
    [inboxSingleView.fulfilled]:(state,action)=>{
        state.loading=false
        state.inboxsingle =  action.payload;
       
        console.log("success");
    },
    [inboxSingleView.rejected]:(state,action)=>{
        console.log("faild");
    },
    //  <<<--------MEEEEEE ---------------------->>>
    
     [meApi.pending]:(state,action) =>{
        state.loading=true;
        console.log("requsted");
    },
    [meApi.fulfilled]:(state,action)=>{
        state.loading=false
        state.me =  action.payload;
       
        console.log("success");
    },
    [meApi.rejected]:(state,action)=>{
        console.log("faild");
    },


    //----------- service update----------------->>>>>

    [updateServiceApi.pending]:(state,action) =>{
        state.loading=true;
        console.log("requsted");
    },
    [updateServiceApi.fulfilled]:(state,action)=>{
        state.loading=false
       
       
        console.log("success");
    },
    [updateServiceApi.rejected]:(state,action)=>{
        console.log("faild");
    },



    }
})
export const {} = TeamSlice.actions;
export default TeamSlice.reducer