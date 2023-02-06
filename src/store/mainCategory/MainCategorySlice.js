import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../AxiosInstance";

export const MainCategoryApi =createAsyncThunk(
    "maincategory/MainCategoryApi",
    async(data)=>{
        const res=await axiosApi.get("/store/subcatagory/");
        console.log("category====",res.data.results);
        return res.data
    }

)


const INITIAL_STATE = () => ({
    loading: false,
    categoryList: ["anwae"]
});

const MainCategorySlice = createSlice({
    name:"maincategory",
    initialState:INITIAL_STATE,
    reducers:{
        // mainCategoryList:(state, action) => {
        //     // const list = action.payload;
        //     state.categoryList= action.payload
        //     // state.categoryList.push(list)
        //     // console.log("list=====",state.categoryList);
        //     // state.categoryList = [...state.categoryList, action.payload];
        //     // state.categoryList.push(action.payload);
        //     console.log("list=====",state.categoryList);
           
        //   },
    },
    extraReducers:{
        [MainCategoryApi.pending]:(state,action) =>{
            state.loading=true;
            console.log("requsted");
        },
        [MainCategoryApi.fulfilled]:(state,action)=>{
            state.loading=false;
            state.categoryList = action.payload;
           
          

           
            console.log("success");
        },
        [MainCategoryApi.rejected]:(state,action)=>{
            console.log("faild");
        },
    }
})

export const{}=MainCategorySlice.actions;
export default MainCategorySlice.reducer