import { configureStore } from '@reduxjs/toolkit'
import { signUpApi } from '../features/sign-up/api/sign-up-api'
import { signInApi } from '../features/sign-in/api/sign-in-api'
import { resetPasswordApi } from '../features/reset-password/api/reset-password-api'

export const store = configureStore({
  reducer: {
    [signUpApi.reducerPath]: signUpApi.reducer,
    [signInApi.reducerPath]: signInApi.reducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      signUpApi.middleware,
      signInApi.middleware,
      resetPasswordApi.middleware
    ),
})
