import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IProfile {
  user_id: number | null
  username: string
  email: string
  password_hash: string
  first_name: string
  last_name: string
  bio?: string
  created_at: string
}
const initialState: IProfile = {
  user_id: null,
  username: '',
  email: '',
  password_hash: '',
  first_name: '',
  last_name: '',
  bio: '',
  created_at: '',
}

export const authSlice = createSlice({
  name: 'auth-state',
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<IProfile>) => {
      return {
        ...state,
        user_id: action.payload.user_id,
        username: action.payload.username,
        email: action.payload.email,
        password_hash: action.payload.password_hash,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        bio: action.payload.bio,
        created_at: action.payload.created_at,
      }
    },
    removeProfile: () => initialState,
  },
})

export const { addProfile, removeProfile } = authSlice.actions

export default authSlice.reducer
