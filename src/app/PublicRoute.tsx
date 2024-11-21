import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { meApi } from '../shared/api/me-api'
import { Spin } from 'antd'

export const PublicRoute = ({ children }: PropsWithChildren) => {
  const { isLoading, isSuccess } = meApi.useMeQuery()

  if (isLoading) return <Spin fullscreen />

  if (isSuccess) return <Navigate to="/employees" />

  return children
}
