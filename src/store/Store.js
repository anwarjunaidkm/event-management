import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/AuthSlice';

export default configureStore({
  reducer: {
    Auth:AuthReducer
  },
});