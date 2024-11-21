import { baseQueryAuth } from '../../../shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'
import {
  GetEmployeesRequest,
  GetEmployeesResponse,
  UpdateEmployeeRequest,
} from '../model/types'

export const employeesApi = createApi({
  reducerPath: 'employees-api',
  baseQuery: baseQueryAuth,
  tagTypes: ['Employees'],
  endpoints: (builder) => ({
    getEmployees: builder.query<GetEmployeesResponse, GetEmployeesRequest>({
      query: ({ portalId }) => ({
        url: `administration/portal/${portalId}/employees`,
      }),
      providesTags: ['Employees'],
    }),
    updateEmployee: builder.mutation<
      GetEmployeesResponse,
      UpdateEmployeeRequest
    >({
      query: ({ portalId, employeeId, body }) => ({
        url: `administration/portal/${portalId}/employees/${employeeId}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Employees'],
    }),
  }),
})
