import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type Step from '~/interfaces/Step'

const initialState: Step[] = []

const stepSlice = createSlice({
  initialState,
  name: 'steps',
  reducers: {
    addStep: (state, action: PayloadAction<Step>) => {
      state.push(action.payload)
    },
    removeStep: (state, action: PayloadAction<string>) => {
      return state.filter(s => s._id !== action.payload)
    },
    setSteps: (_, action: PayloadAction<Step[]>) => action.payload,
    updateStep: (state, action: PayloadAction<Step>) => {
      const index = state.findIndex(s => s._id === action.payload._id)
      if (index !== -1) state[index] = action.payload
    }
  }
})

export const { setSteps, addStep, updateStep, removeStep } = stepSlice.actions
export default stepSlice.reducer
