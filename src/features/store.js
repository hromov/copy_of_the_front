import { configureStore } from "@reduxjs/toolkit";
import banksReducer from './banks/banksSlice';
  
  export default configureStore({
    reducer: {
        banks: banksReducer
    }
  })