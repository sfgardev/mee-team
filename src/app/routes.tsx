/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'
import { lazy } from 'react'

const SignUp = lazy(() => import('../pages/sign-up'))
const SignIn = lazy(() => import('../pages/sign-in'))
const ResetPassword = lazy(() => import('../pages/reset-password'))
const Employees = lazy(() => import('../pages/employees'))
const PageNotFound = lazy(() => import('../pages/page-not-found'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
      {
        path: '/sign-up',
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: '/reset-password',
        element: (
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        ),
      },
      {
        path: '/employees',
        element: (
          <ProtectedRoute>
            <Employees />
          </ProtectedRoute>
        ),
      },
    ],
  },
])
