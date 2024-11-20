import { ComponentPropsWithoutRef, forwardRef } from 'react'
import s from './Select.module.scss'
import clsx from 'clsx'

type SelectOptions = {
  value: string
  label: string
}

type Props = {
  placeholder: string
  errorText?: string
  options: SelectOptions[]
} & ComponentPropsWithoutRef<'select'>

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, placeholder, errorText, ...props }, ref) => {
    return (
      <div
        className={clsx(s.wrapper, {
          [s.error]: errorText,
        })}
      >
        <select ref={ref} {...props}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errorText && <p className={s.errorText}>{errorText}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
