import { CSSProperties, PropsWithChildren } from 'react'
import s from './Layout.module.scss'
import { Header } from '../header'

type Props = {
  sx?: CSSProperties
}

export const Layout = ({ sx, children }: PropsWithChildren<Props>) => {
  return (
    <div className={s.layout} style={sx}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
