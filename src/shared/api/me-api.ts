import { baseQueryAuth } from '.'
import { createApi } from '@reduxjs/toolkit/query/react'
import { BaseResponse } from '../model'

export const meApi = createApi({
  reducerPath: 'me-api',
  baseQuery: baseQueryAuth,
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    me: builder.query<BaseResponse<{ current_portal_id: number }>, void>({
      query: () => ({ url: 'me' }),
    }),
  }),
})
