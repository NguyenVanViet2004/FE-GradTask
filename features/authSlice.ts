import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type Auth from '~/interfaces/Auth'

const initialState: Auth = {
  isAuthenticated: false,
  token: ''
}

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setAuthenticate (state, action: PayloadAction<Partial<Auth>>) {
      Object.assign(state, action.payload)
    }
  }
})

export const { setAuthenticate } = authSlice.actions

export default authSlice.reducer
