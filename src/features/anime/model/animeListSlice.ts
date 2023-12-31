import { createSlice } from '@reduxjs/toolkit'

interface IPageState {
  currentOffset: number
  limit: number
}

const initialState: IPageState = {
  currentOffset: 0,
  limit: 20,
}

export const currentOffsetSlice = createSlice({
  name: 'currentOffset',
  initialState,
  reducers: {
    updateCurrentOffset: (state, action) => {
      state.currentOffset = action.payload
    },
    updateCurrentLimit: (state, action) => {
      state.limit = action.payload
    },
  },
})

export const { updateCurrentOffset, updateCurrentLimit } =
  currentOffsetSlice.actions
