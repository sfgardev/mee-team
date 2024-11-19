import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../../../shared/api'
import { SignInRequest, SignInResponse } from '../model/types'

export const signInApi = createApi({
  reducerPath: 'sign-in-api',
  baseQuery,
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (body) => ({
        url: 'token',
        method: 'POST',
        body,
      }),
    }),
  }),
})
