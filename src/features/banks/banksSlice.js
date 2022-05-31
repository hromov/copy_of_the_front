import { createSlice } from '@reduxjs/toolkit'
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
    bankErrorClosed: (state, action) => {
      return {
        ...state,
        errors: state.errors.filter(i)
      }
    }
  }
})

export const saveTheBank = (bank) => {

  return (dispatch) => {
    banksAPI.saveBank(bank)
        .then((resp) => {
          // setSaveError('');
          dispatch(bankChanged({ bank: resp.data || bank }));
          // setOpen(false);
        })
        .catch((err) => {
          console.log(err)
          // setSaveError(err.message);
        });
  }
}

export const { banksLoaded, bankChanged, bankDeleted } = banksSlice.actions

export default banksSlice.reducer