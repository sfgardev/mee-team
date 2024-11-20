import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const authHeaders = (headers: Headers) => {
  const accessToken = window.localStorage.getItem('accessToken')

  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`)
  }

  return headers
}

export const baseQueryAuth = fetchBaseQuery({
  baseUrl: 'https://api.mee.team/',
  prepareHeaders: authHeaders,
})
