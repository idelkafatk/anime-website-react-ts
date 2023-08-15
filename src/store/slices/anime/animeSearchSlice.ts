import { createSlice } from '@reduxjs/toolkit'

interface ISearchQuery {
  query: string
  queryKey: [string, number]
}

const initialState: ISearchQuery = {
  query: 'naruto',
  queryKey: ['animelist', 0],
}

const searchQuery = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.query = action.payload
    },
    updateQueryKey: (state, action) => {
      state.queryKey = action.payload
    },
  },
})

export const { updateSearchQuery, updateQueryKey } = searchQuery.actions
export default searchQuery.reducer
