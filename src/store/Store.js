import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/AuthSlice';
import MainCategoryReducer from './mainCategory/MainCategorySlice';
import UserReducer from "./user/UserSlice"
import adminReducer from "./admin/AdminSlice";
import teamReducer from "./team/TeamSlice";

export default configureStore({
  reducer: {
    Auth:AuthReducer,
    Registration:UserReducer,
    Category:MainCategoryReducer,
    admin:adminReducer,
    team:teamReducer,
  },
});