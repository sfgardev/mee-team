import { Outlet } from 'react-router-dom'
import { Layout } from '../shared/ui/layout'
import { Suspense } from 'react'
import { Spin } from 'antd'

function App() {
  return (
    <Layout>
      <Suspense fallback={<Spin fullscreen />}>
        <Outlet />
      </Suspense>
    </Layout>
  )
}

export default App
