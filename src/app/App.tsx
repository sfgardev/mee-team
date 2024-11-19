import { Outlet } from 'react-router-dom'
import { Layout } from '../shared/ui/layout'

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
