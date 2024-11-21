import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { SignUp } from '../pages/sign-up'
import { SignIn } from '../pages/sign-in'
import { ResetPassword } from '../pages/reset-password'
import { Employees } from '../pages/employees'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'
import { PageNotFound } from '../pages/page-not-found'

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
