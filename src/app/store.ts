import { configureStore } from '@reduxjs/toolkit'
import { signUpApi } from '../features/sign-up/api/sign-up-api'

export const store = configureStore({
  reducer: {
    [signUpApi.reducerPath]: signUpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signUpApi.middleware),
})
