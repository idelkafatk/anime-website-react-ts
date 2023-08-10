// export const initialState: IAnimeList = {
//   data: [],
//   paging: {
//     next: null,
//   },
// }

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  placeholderData: 'Loading...',
}

interface IAction {
  type: string
  payload: any
}

const placeholderSlice = createSlice({
  name: 'placeholder',
  initialState: {
    placeholderData: 'Loading...',
  },
  reducers: {
    updatePlaceholderData: (state, action) => {
      state.placeholderData = action.payload
    },
  },
})

export const { updatePlaceholderData } = placeholderSlice.actions
export default placeholderSlice.reducer
