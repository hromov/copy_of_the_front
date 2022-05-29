import { createSlice } from '@reduxjs/toolkit'
import { initBanks } from './banksApi'

export const banksSlice = createSlice({
  name: 'banks',
  initialState: {
    banks: initBanks
  },
  reducers: {
      loadBanks: (state, action) => {
        return {
          ...state,
          banks: action.banks
        }
      },
      bankChanged: (state, action) => {
        const bank = action.payload.bank
        let banks = [...state.banks];
        if (bank.id === undefined) {
          banks.push(bank);
          return {
            ...state,
            banks: banks
          }
        } else {
          const index = banks.findIndex((b) => b.id === bank.id);
          banks[index] = bank;
          return {
            ...state,
            banks: banks
          }
        }
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
export const { loadBanks, bankChanged } = banksSlice.actions

export default banksSlice.reducer