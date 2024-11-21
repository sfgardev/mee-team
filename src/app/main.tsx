import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { NotificationProvider } from './NotificationProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </Provider>
  </StrictMode>
)
