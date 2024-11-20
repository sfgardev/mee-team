import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { meApi } from '../shared/api/me-api'



export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isLoading, isError } = meApi.useMeQuery()

  if (isLoading) return <div>Loading...</div>

  if (isError) return <Navigate to="/" />

  return children
}
