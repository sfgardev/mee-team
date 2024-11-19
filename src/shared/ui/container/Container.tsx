import { CSSProperties, PropsWithChildren } from 'react'
import s from './Container.module.scss'

type Props = {
  sx?: CSSProperties
}

export const Container = ({ sx, children }: PropsWithChildren<Props>) => {
  return (
    <div className={s.container} style={sx}>
      {children}
    </div>
  )
}
