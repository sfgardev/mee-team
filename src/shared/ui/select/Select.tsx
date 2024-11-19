import { ComponentPropsWithoutRef, forwardRef } from 'react'
import s from './Select.module.scss'

type SelectOptions = {
  value: string
  label: string
}

type Props = {
  placeholder: string
  options: SelectOptions[]
} & ComponentPropsWithoutRef<'select'>

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, placeholder, ...props }, ref) => {
    return (
      <select ref={ref} className={s.select} {...props}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  }
)

Select.displayName = 'Select'
