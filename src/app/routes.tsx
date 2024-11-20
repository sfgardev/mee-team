import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { SignUp } from '../pages/sign-up'
import { SignIn } from '../pages/sign-in'
import { ResetPassword } from '../pages/reset-password'
import { Users } from '../pages/users'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: 'Page not found',
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
        path: '/users',
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
    ],
  },
])
