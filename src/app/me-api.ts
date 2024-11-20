import { baseQueryAuth } from '../shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'
import { BaseResponse } from '../shared/model'

export const meApi = createApi({
  baseQuery: baseQueryAuth,
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    me: builder.query<BaseResponse<object>, void>({
      query: () => ({ url: 'me' }),
    }),
  }),
})
