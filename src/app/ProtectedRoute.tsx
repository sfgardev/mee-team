import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { meApi } from '../shared/api/me-api'
import { Spin } from 'antd'

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isLoading, isError } = meApi.useMeQuery()

  if (isLoading) return <Spin fullscreen />

  if (isError) return <Navigate to="/" />

  return children
}
