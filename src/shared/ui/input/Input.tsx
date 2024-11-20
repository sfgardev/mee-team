import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'
import s from './Input.module.scss'
import clsx from 'clsx'

type Props = {
  label?: string
  errorText?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, errorText, id: propsId, ...props }, ref) => {
    const generatedId = useId()
    const id = propsId ?? generatedId

    return (
      <div
        className={clsx(s.wrapper, {
          [s.error]: errorText,
        })}
      >
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...props} />
        {errorText && <p className={s.errorText}>{errorText}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
