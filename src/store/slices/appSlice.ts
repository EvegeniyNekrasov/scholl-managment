import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export interface AppState {
  theme: Theme
}

const INITIAL_STATE = {
  theme: Theme.Light
} as AppState

const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = appSlice.actions

export default appSlice.reducer
