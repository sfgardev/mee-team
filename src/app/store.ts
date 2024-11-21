import { configureStore } from '@reduxjs/toolkit'
import { signUpApi } from '../features/sign-up/api/sign-up-api'
import { signInApi } from '../features/sign-in/api/sign-in-api'
import { resetPasswordApi } from '../features/reset-password/api/reset-password-api'
import { meApi } from '../shared/api/me-api'
import { employeesApi } from '../features/employees/api/employees-api'
import { logoutApi } from '../shared/api/logout-api'

export const store = configureStore({
  reducer: {
    [signUpApi.reducerPath]: signUpApi.reducer,
    [signInApi.reducerPath]: signInApi.reducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    [meApi.reducerPath]: meApi.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    [logoutApi.reducerPath]: logoutApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      signUpApi.middleware,
      signInApi.middleware,
      resetPasswordApi.middleware,
      meApi.middleware,
      employeesApi.middleware,
      logoutApi.middleware
    ),
})
