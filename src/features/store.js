import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import banksReducer from './banks/banksSlice';

export default configureStore({
  reducer: {
    banks: banksReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
})