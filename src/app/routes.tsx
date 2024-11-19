import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { SignUp } from '../pages/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
    ],
  },
])
