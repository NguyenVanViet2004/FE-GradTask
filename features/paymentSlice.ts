import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type Payment from '~/interfaces/Payment'

const initialState: Payment[] = []

const paymentSlice = createSlice({
  initialState,
  name: 'payments',
  reducers: {
    addPayment: (state, action: PayloadAction<Payment>) => {
      state.push(action.payload)
    },
    removePayment: (state, action: PayloadAction<string>) => {
      return state.filter((p) => p._id !== action.payload)
    },
    setPayments: (_, action: PayloadAction<Payment[]>) => action.payload,
    updatePayment: (state, action: PayloadAction<Payment>) => {
      const index = state.findIndex((p) => p._id === action.payload._id)
      if (index !== -1) state[index] = action.payload
    }
  }
})

export const { setPayments, addPayment, updatePayment, removePayment } =
  paymentSlice.actions
export default paymentSlice.reducer
