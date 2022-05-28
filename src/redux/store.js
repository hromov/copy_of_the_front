import { configureStore } from "@reduxjs/toolkit";
import banksReducer from './features/banks/banksSlice';
  
  export default configureStore({
    reducer: {
        banks: banksReducer
    }
  })
  
//   // Can still subscribe to the store
//   store.subscribe(() => console.log(store.getState()))
  
//   // Still pass action objects to `dispatch`, but they're created for us
//   store.dispatch(incremented())
//   // {value: 1}
//   store.dispatch(incremented())
//   // {value: 2}
//   store.dispatch(decremented())
//   // {value: 1}