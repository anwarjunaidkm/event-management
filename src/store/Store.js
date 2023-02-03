import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/AuthSlice';
import MainCategoryReducer from './mainCategory/MainCategorySlice';
import UserReducer from "./user/UserSlice"

export default configureStore({
  reducer: {
    Auth:AuthReducer,
    Registration:UserReducer,
    Category:MainCategoryReducer
  },
});