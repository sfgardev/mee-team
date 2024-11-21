import { useNavigate } from 'react-router-dom'
import { Button } from '../../shared/ui/button'
import { Container } from '../../shared/ui/container'
import s from './PageNotFound.module.scss'

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <section>
      <Container>
        <div className={s.wrapper}>
          <h1>Page Not Found</h1>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </Container>
    </section>
  )
}

export default PageNotFound
