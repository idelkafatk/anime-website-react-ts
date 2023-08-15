import { createSlice } from '@reduxjs/toolkit'

interface IPageState {
  currentOffset: number
  limit: number
}

const initialState: IPageState = {
  currentOffset: 0,
  limit: 20,
}

const currentOffsetSlice = createSlice({
  name: 'currentOffset',
  initialState,
  reducers: {
    updateCurrentOffset: (state, action) => {
      state.currentOffset = action.payload
    },
  },
})

export const { updateCurrentOffset } = currentOffsetSlice.actions
export default currentOffsetSlice.reducer
