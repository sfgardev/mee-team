import { configureStore } from '@reduxjs/toolkit'
import { signUpApi } from '../features/sign-up/api/sign-up-api'
import { signInApi } from '../features/sign-in/api/sign-in-api'

export const store = configureStore({
  reducer: {
    [signUpApi.reducerPath]: signUpApi.reducer,
    [signInApi.reducerPath]: signInApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signUpApi.middleware, signInApi.middleware),
})
