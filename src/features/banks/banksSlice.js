import { createSlice } from '@reduxjs/toolkit'

export const banksSlice = createSlice({
  name: 'banks',
  initialState: {
    banks: []
  },
  reducers: {
    banksLoaded: (state, action) => {
      return {
        ...state,
        banks: action.payload.banks
      }
    },
    bankChanged: (state, action) => {
      const bank = action.payload.bank;
      let banks = [...state.banks];
      const index = banks.findIndex((b) => b.id === bank.id);
      if (index === -1) {
        banks.push(bank);
        return {
          ...state,
          banks: banks
        }
      } else {
        banks[index] = bank;
        return {
          ...state,
          banks: banks
        }
      }
    },
    bankDeleted: (state, action) => {
      const id = action.payload.id;
      let banks = [...state.banks];
      const index = banks.findIndex((b) => b.id === id);
      if (index !== -1) {
        banks.splice(index, 1);
      }
      return {
        ...state,
        banks: banks
      }
    }
  }
})

export const { banksLoaded, bankChanged, bankDeleted } = banksSlice.actions

export default banksSlice.reducer