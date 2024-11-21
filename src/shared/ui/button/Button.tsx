import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  PropsWithChildren,
} from 'react'
import s from './Button.module.scss'
import clsx from 'clsx'

type Props = { sx?: CSSProperties } & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  ({ children, sx, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(s.button, className)}
        style={sx}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
