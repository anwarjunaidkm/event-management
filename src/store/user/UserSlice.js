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

//-------post enqueyyyy t--------------------
 export const PostEnquiryApi = createAsyncThunk(
   "user/PostEnquiryApi",
   async (data) => {
     console.log("data==", data.id);

     const res = await axiosApi.post(
       `/store/enquiry/?service=${data.id}`,
       data.data
     );
     // console.log(res.data);

     setTimeout(function () {
       data.navigate("/");
     }, 900);
   }
 );
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
 //--------------------single view comapny---------------
 export const SingleViewApi = createAsyncThunk(
    "user/SingleViewApi",
    async(data)=>{
        console.log("single data",data.data);
        console.log("single data subbbb",data.subId);
        const res = await axiosApi.get(`/store/service/${data.data}/?sub_catagory=${data.subId}/`)
        console.log("single===",res);
        return res.data
    }
 )


 //-------post review--------------------

 export const  PostReviewApi = createAsyncThunk(
    "user/PostReviewApi",
    async(data)=>{
        console.log("review prop==",data);
    

            const res = await axiosApi.post(`store/rating/?service=${data.data}`,{"rating":data.rating, "review":data.review.review})


            console.log("review response",res);
        


        
    }
 )

  //--------------------single get reviewwwwwwwwww view comapny---------------
  export const getReviewApi = createAsyncThunk(
    "user/getReviewApi",
    async(data)=>{
       console.log("DATA",data);
        const res = await axiosApi.get(`store/rating/?account=${data.data}`) 
        console.log("GET REVIEW",res.data);

        return res.data
    }
 )

 //------------------contactUs-----------------------
 export const postInboxApi = createAsyncThunk(
    "user/postInboxApi",
    async(data)=>{
        console.log(data);
        const res = await axiosApi.post( `/store/inbox/?service=${data?.id}`,data?.data)

        console.log("contactsUS==",res.data);
        setTimeout(function () {
            data.navigate("/");
          }, 500);
        }

    
 )







//<<-------------slice siart------------------->>>
const INITIAL_STATE ={
    loading:false,
    listCompany:[],
    singleData:{},
    reviewData:[],
    error: null

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

            toast.success("Successful!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
            });
           
            console.log("success");
        },
        [PostEnquiryApi.rejected]:(state,action)=>{
            state.loading=false;
            toast.error("failed. Please try again..", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
              });
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
        },
        //--------single view companyyy---------

        [SingleViewApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [SingleViewApi.fulfilled]:(state,action)=>{
            state.loading=false;
            state.singleData =  action.payload;
            console.log("success");

        },
        [SingleViewApi.rejected]:(state,action)=>{
            state.loading=false;
            console.log("failed");
        },

          //--------- post review---------

          [PostReviewApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [PostReviewApi.fulfilled]:(state,action)=>{
            state.loading=false;
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
        [PostReviewApi.rejected]:(state,action)=>{
            state.loading=false;
            toast.error(" failed. Please try again.", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
              });
            console.log("failed");
        },

        //---------get review-----------------

        [getReviewApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [getReviewApi.fulfilled]:(state,action)=>{
            state.loading=false;
            state.reviewData =  action.payload;
            console.log("success");
        },
        [getReviewApi.rejected]:(state,action)=>{
            state.loading=false;

            console.log("failed");
        },


//---------------contect us-------------

        [postInboxApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [postInboxApi.fulfilled]:(state,action)=>{
            state.loading=false;

            toast.success("Successful!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
            });
           
            console.log("success");
        },
        [postInboxApi.rejected]:(state,action)=>{
            state.loading=false;
            toast.error("failed. Please try again..", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored"
              });
            console.log("failed");
        },
    }
    
})
export const {} =UserSlice.actions;
export default  UserSlice.reducer;