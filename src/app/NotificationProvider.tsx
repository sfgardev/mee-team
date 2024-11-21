import { notification } from 'antd'
import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
} from 'react'
import { isApiError } from '../shared/api'

type NotificationContext = {
  openSuccessNotification: (description: string) => void
  openErrorNotification: (error: unknown) => void
}

const NotificationContext = createContext<NotificationContext | null>(null)

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [api, contextHolder] = notification.useNotification()

  const openSuccessNotification = useCallback(
    (description: string) => {
      api.success({
        message: 'Success',
        placement: 'topRight',
        description,
      })
    },
    [api]
  )

  const openErrorNotification = useCallback(
    (error: unknown) => {
      if (isApiError(error)) {
        api.error({
          message: 'Error',
          placement: 'topRight',
          description: error.data.message,
        })
      }
    },
    [api]
  )

  const contextValue = useMemo(
    () => ({
      openSuccessNotification,
      openErrorNotification,
    }),
    [openErrorNotification, openSuccessNotification]
  )

  return (
    <NotificationContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNotificationContext = () => {
  const context = useContext(NotificationContext)

  if (!context) {
    throw new Error(
      'You are using useNotificationContext outside NotificationProvider'
    )
  }

  return context
}
