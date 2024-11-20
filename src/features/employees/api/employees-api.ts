import { baseQueryAuth } from '../../../shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'
import { GetEmployeesRequest, GetEmployeesResponse } from '../model/types'

export const employeesApi = createApi({
  reducerPath: 'employees-api',
  baseQuery: baseQueryAuth,
  endpoints: (builder) => ({
    getEmployees: builder.query<GetEmployeesResponse, GetEmployeesRequest>({
      query: ({ portalId }) => ({
        url: `administration/portal/${portalId}/employees`,
      }),
    }),
  }),
})
