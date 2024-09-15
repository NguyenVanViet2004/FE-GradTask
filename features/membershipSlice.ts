import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { Rank } from '~/interfaces/enum/Rank'
import type Membership from '~/interfaces/Membership'

const initialState: Membership = { name: Rank.BRONZE, point: 0 }

const membershipSlice = createSlice({
  initialState,
  name: 'membership',
  reducers: {
    setMembership: (_, action: PayloadAction<Membership>) => action.payload,
    updateMembership: (state, action: PayloadAction<Partial<Membership>>) => ({
      ...state,
      ...action.payload
    })
  }
})

export const { setMembership, updateMembership } = membershipSlice.actions
export default membershipSlice.reducer
