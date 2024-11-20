import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { meApi } from './me-api'

export const PublicRoute = ({ children }: PropsWithChildren) => {
  const { isLoading, isSuccess } = meApi.useMeQuery()

  if (isLoading) return <div>Loading...</div>

  if (isSuccess) return <Navigate to="/users" />

  return children
}
