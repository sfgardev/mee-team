import { ResetPasswordRequest, ResetPasswordResponse } from '../model/types'
import { baseQuery } from './../../../shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'

export const resetPasswordApi = createApi({
  reducerPath: 'reset-password-api',
  baseQuery,
  endpoints: (builder) => ({
    resetPassword: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordRequest
    >({
      query: (body) => ({
        url: 'resetPassword',
        method: 'POST',
        body,
      }),
    }),
  }),
})
