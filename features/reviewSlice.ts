import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type Review from '~/interfaces/Review'

const initialState: Review[] = []

const reviewSlice = createSlice({
  initialState,
  name: 'reviews',
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      state.push(action.payload)
    },
    removeReview: (state, action: PayloadAction<string>) => {
      return state.filter((r) => r._id !== action.payload)
    },
    setReviews: (_, action: PayloadAction<Review[]>) => action.payload,
    updateReview: (state, action: PayloadAction<Review>) => {
      const index = state.findIndex((r) => r._id === action.payload._id)
      if (index !== -1) state[index] = action.payload
    }
  }
})

export const { setReviews, addReview, updateReview, removeReview } =
  reviewSlice.actions
export default reviewSlice.reducer
