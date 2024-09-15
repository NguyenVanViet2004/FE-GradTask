import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { GenderEnum } from '~/interfaces/enum/Gender'
import { Rank } from '~/interfaces/enum/Rank'
import { Role } from '~/interfaces/enum/Role'
import type Membership from '~/interfaces/Membership'
import type User from '~/interfaces/User'

const initialMembership: Membership = {
  name: Rank.BRONZE,
  point: 0
}

const initialState: User = {
  _id: '',
  address: null,
  avatarUrl: null,
  dateOfBirth: null,
  email: '',
  fullName: '',
  gender: GenderEnum.MALE,
  membership: initialMembership,
  password: '',
  phoneNumber: '',
  point: 0,
  role: Role.USER,
  token: ''
}

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    resetUser: () => initialState,
    setUser: (_, action: PayloadAction<User>) => {
      return action.payload
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { setUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
