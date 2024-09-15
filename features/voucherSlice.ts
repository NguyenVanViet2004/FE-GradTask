import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type Voucher from '~/interfaces/voucher'

const initialState: Voucher[] = []

const voucherSlice = createSlice({
  initialState,
  name: 'vouchers',
  reducers: {
    addVoucher: (state, action: PayloadAction<Voucher>) => {
      state.push(action.payload)
    },
    removeVoucher: (state, action: PayloadAction<string>) => {
      return state.filter(v => v._id !== action.payload)
    },
    setVouchers: (state, action: PayloadAction<Voucher[]>) => action.payload,
    updateVoucher: (state, action: PayloadAction<Voucher>) => {
      const index = state.findIndex(v => v._id === action.payload._id)
      if (index !== -1) state[index] = action.payload
    }
  }
})

export const { setVouchers, addVoucher, updateVoucher, removeVoucher } = voucherSlice.actions
export default voucherSlice.reducer
