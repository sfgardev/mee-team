import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { SignUp } from '../pages/sign-up'
import { SignIn } from '../pages/sign-in'
import { ResetPassword } from '../pages/reset-password'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/reset-password',
        element: <ResetPassword />,
      },
    ],
  },
])
