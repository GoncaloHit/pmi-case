import { configureStore } from '@reduxjs/toolkit'
import { API } from './api'

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    API.middleware,
  ),
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
