import { createSlice } from '@reduxjs/toolkit'

interface ISearchQuery {
  query: string
}

const initialState: ISearchQuery = {
  query: '',
}

export const searchQuery = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.query = action.payload
    },
  },
})

export const { updateSearchQuery } = searchQuery.actions
