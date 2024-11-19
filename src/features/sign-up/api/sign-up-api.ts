import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../../../shared/api'
import { SignUpRequest, SignUpResponse } from '../model/types'

export const signUpApi = createApi({
  reducerPath: 'sign-up-api',
  baseQuery,
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (body) => ({
        url: 'registration/email',
        method: 'POST',
        body,
      }),
    }),
  }),
})
