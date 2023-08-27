import { configureStore } from '@reduxjs/toolkit'
import { currentOffsetSlice, searchQuery } from '../../../features/anime'

export const store = configureStore({
  reducer: {
    offset: currentOffsetSlice.reducer,
    searchQuery: searchQuery.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
