import { configureStore } from '@reduxjs/toolkit'

// Store
import counterReducer from '../features/counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
