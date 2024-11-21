import { Link } from 'react-router-dom'
import { Button } from '../button'
import { Container } from '../container'
import s from './Header.module.scss'
import { meApi } from '../../api'
import { logoutApi } from '../../api/logout-api'
import { useNotificationContext } from '../../providers'

export const Header = () => {
  const { isSuccess } = meApi.useMeQuery()
  const [logout, { isLoading }] = logoutApi.useLogoutMutation()
  const { openSuccessNotification, openErrorNotification } =
    useNotificationContext()

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap()
      window.localStorage.removeItem('accessToken')
      openSuccessNotification(response.message)
      window.location.href = '/'
    } catch (error) {
      openErrorNotification(error)
    }
  }

  return (
    <header className={s.header}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2>
          <Link to="/">Mee Team</Link>
        </h2>
        {isSuccess && (
          <Button disabled={isLoading} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Container>
    </header>
  )
}
