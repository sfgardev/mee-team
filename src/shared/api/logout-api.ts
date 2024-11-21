import { baseQueryAuth } from '.'
import { createApi } from '@reduxjs/toolkit/query/react'
import { BaseResponse } from '../model'

export const logoutApi = createApi({
  reducerPath: 'logout-api',
  baseQuery: baseQueryAuth,
  endpoints: (builder) => ({
    logout: builder.mutation<BaseResponse<undefined>, void>({
      query: () => ({ url: 'token', method: 'DELETE' }),
    }),
  }),
})
