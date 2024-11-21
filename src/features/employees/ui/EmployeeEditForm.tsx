import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../../shared/ui/input'
import s from './EmployeeEditForm.module.scss'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../../shared/ui/button'
import { EmployeeEditFormFields } from '../model/types'
import { EmployeeEditFormSchema } from '../model/schemas'

type Props = {
  employee: EmployeeEditFormFields | null
  onCancel: () => void
}

export const EmployeeEditForm = ({ employee, onCancel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeEditFormFields>({
    values: {
      firstName: employee?.firstName ?? '',
      lastName: employee?.lastName ?? '',
      email: employee?.email ?? '',
      phone: employee?.phone ?? '',
    },
    resolver: zodResolver(EmployeeEditFormSchema),
  })

  const onSubmit: SubmitHandler<EmployeeEditFormFields> = async (data) => {
    console.log(data)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="First name..."
        label="First name"
        errorText={errors.firstName?.message}
        {...register('firstName')}
      />
      <Input
        placeholder="Last name..."
        label="Last name"
        errorText={errors.lastName?.message}
        {...register('lastName')}
      />
      <Input
        placeholder="Email..."
        label="Email"
        errorText={errors.email?.message}
        {...register('email')}
      />
      <Input
        placeholder="Phone..."
        label="Phone"
        errorText={errors.phone?.message}
        {...register('phone')}
      />
      <div className={s.actions}>
        <Button onClick={onCancel} className={s.cancelBtn} type="button">
          Cancel
        </Button>
        <Button>Save</Button>
      </div>
    </form>
  )
}
