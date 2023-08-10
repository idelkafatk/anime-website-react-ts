import { configureStore } from '@reduxjs/toolkit'
import placeholderReducer from './slices/anime/animeListSlice'

const store = configureStore({
  reducer: {
    placeholder: placeholderReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
