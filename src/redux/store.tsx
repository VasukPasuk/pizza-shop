import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './Slices/shop.slice';
const store = configureStore({
  reducer: {
    shop: shopReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store