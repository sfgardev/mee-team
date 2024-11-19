import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'
import s from './Input.module.scss'

type Props = { label?: string } & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, id: propsId, ...props }, ref) => {
    const generatedId = useId()
    const id = propsId ?? generatedId

    return (
      <div className={s.wrapper}>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...props} />
      </div>
    )
  }
)

Input.displayName = 'Input'
