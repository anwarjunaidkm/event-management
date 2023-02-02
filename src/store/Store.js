import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/AuthSlice';
import UserReducer from "./user/UserSlice"

export default configureStore({
  reducer: {
    Auth:AuthReducer,
    Registration:UserReducer
  },
});