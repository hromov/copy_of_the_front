import { createSelector, createSlice } from '@reduxjs/toolkit'
import { banksAPI } from '../../api/banksApi';

export const banksSlice = createSlice({
  name: 'banks',
  initialState: {
    banks: [],
    errors: [],
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
      return {
        ...state,
        banks: state.banks.filter((b) => b.id !== id)
      }
    },
    bankChangeError: (state, action) => {
      return {
        ...state,
        errors: [...state.errors, action.payload.error]
      }
    },
    hideBankErrors: (state) => {
      return {
        ...state,
        errors: []
      }
    }
  }
})

export const saveBank = (bank) => {
  return async (dispatch) => {
    try {
      const data = await banksAPI.saveBank(bank);
      dispatch(bankChanged({ bank: data || bank }));
    } catch (err) {
      dispatch(bankChangeError({ error: err.message }));
    }
  }
}

export const deleteBank = (id) => {
  return async (dispatch) => {
    try {
      await banksAPI.deleteBank(id);
      dispatch(bankDeleted({ id }));
    } catch (err) {
      dispatch(bankChangeError({ error: err.message }));
    }
  }
}

export const { banksLoaded, bankChanged, bankDeleted, bankChangeError, hideBankErrors } = banksSlice.actions

export default banksSlice.reducer

const selectBanksState = (state) => state.banks

export const selectBanks = createSelector(selectBanksState, (state) => state.banks)
export const selectErrors = createSelector(selectBanksState, (state) => state.errors)