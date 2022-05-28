import { createSlice } from '@reduxjs/toolkit'
import { initBanks } from './banksApi'

export const banksSlice = createSlice({
  name: 'banks',
  initialState: {
    banks: initBanks
  },
  reducers: {
      loadBanks: (state, action) => {
          state.banks = action.banks
      }
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = banksSlice.actions

export default banksSlice.reducer