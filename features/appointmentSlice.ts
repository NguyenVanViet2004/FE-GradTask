import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type Appointment from '~/interfaces/Appointment'

const initialState: Appointment[] = []

const appointmentSlice = createSlice({
  initialState,
  name: 'appointments',
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.push(action.payload)
    },
    removeAppointment: (state, action: PayloadAction<string>) => {
      return state.filter((a) => a._id !== action.payload)
    },
    setAppointments: (_, action: PayloadAction<Appointment[]>) =>
      action.payload,
    updateAppointment: (state, action: PayloadAction<Appointment>) => {
      const index = state.findIndex((a) => a._id === action.payload._id)
      if (index !== -1) state[index] = action.payload
    }
  }
})

export const {
  setAppointments,
  addAppointment,
  updateAppointment,
  removeAppointment
} = appointmentSlice.actions
export default appointmentSlice.reducer
