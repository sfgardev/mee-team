import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../../shared/ui/input'
import s from './EmployeeEditForm.module.scss'
import { Button } from '../../../shared/ui/button'
import { EmployeeEditFormFields } from '../model/types'
import { employeesApi } from '../api/employees-api'
import { zodResolver } from '@hookform/resolvers/zod'
import { EmployeeEditFormSchema } from '../model/schemas'
import { useNotificationContext } from '../../../app/NotificationProvider'

type Props = {
  employee: EmployeeEditFormFields | null
  portalId: number
  onClose: () => void
}

export const EmployeeEditForm = ({ employee, portalId, onClose }: Props) => {
  const [updateEmployee, { isLoading }] =
    employeesApi.useUpdateEmployeeMutation()
  const { openErrorNotification, openSuccessNotification } =
    useNotificationContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeEditFormFields>({
    defaultValues: {
      employeeId: employee?.employeeId,
      firstName: employee?.firstName ?? '',
      lastName: employee?.lastName ?? '',
      email: employee?.email ?? '',
      phone: employee?.phone ?? '',
      local: employee?.local,
    },
    resolver: zodResolver(EmployeeEditFormSchema),
  })

  const onSubmit: SubmitHandler<EmployeeEditFormFields> = async (data) => {
    try {
      const { firstName, lastName, email, phone, employeeId, local } = data
      const response = await updateEmployee({
        portalId,
        employeeId,
        body: {
          portal_id: portalId,
          name_first: firstName,
          name_last: lastName,
          email_work: email,
          phone_work: phone,
          local,
        },
      }).unwrap()
      onClose()
      openSuccessNotification(response.message)
    } catch (error) {
      console.error(error)
      openErrorNotification(error)
    }
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
        <Button onClick={onClose} className={s.cancelBtn} type="button">
          Cancel
        </Button>
        <Button disabled={isLoading}>Save</Button>
      </div>
    </form>
  )
}
