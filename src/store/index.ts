import { configureStore } from '@reduxjs/toolkit'
import currentOffsetSlice from './slices/anime/animeListSlice'
import searchQuery from './slices/anime/animeSearchSlice'

export const store = configureStore({
  reducer: {
    offset: currentOffsetSlice,
    searchQuery,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
