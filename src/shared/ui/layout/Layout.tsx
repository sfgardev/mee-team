import { CSSProperties, PropsWithChildren } from 'react'
import s from './Layout.module.scss'

type Props = {
  sx?: CSSProperties
}

export const Layout = ({ sx, children }: PropsWithChildren<Props>) => {
  return (
    <div className={s.layout} style={sx}>
      <main>{children}</main>
    </div>
  )
}
