import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  PropsWithChildren,
} from 'react'
import s from './Button.module.scss'

type Props = { sx?: CSSProperties } & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  ({ children, sx, ...props }, ref) => {
    return (
      <button ref={ref} className={s.button} style={sx} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
