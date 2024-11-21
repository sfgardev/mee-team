import { z } from 'zod'
import { Input } from '../../../shared/ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import s from './ResetPassword.module.scss'
import { Button } from '../../../shared/ui/button'
import { resetPasswordApi } from '../api/reset-password-api'
import { useNavigate } from 'react-router-dom'
import { useNotificationContext } from '../../../shared/providers'

const ResetPaswordFormSchema = z.object({
  email: z.string().trim().email(),
})

type FormFields = z.infer<typeof ResetPaswordFormSchema>

export const ResetPasswordForm = () => {
  const { openSuccessNotification, openErrorNotification } =
    useNotificationContext()
  const navigate = useNavigate()
  const [resetPassword, { isLoading }] =
    resetPasswordApi.useResetPasswordMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(ResetPaswordFormSchema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await resetPassword(data).unwrap()
      navigate('/')
      openSuccessNotification(response.message)
    } catch (error) {
      console.error(error)
      openErrorNotification(error)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Enter email..."
        label="Email"
        errorText={errors.email?.message}
        {...register('email')}
      />
      <Button disabled={isLoading}>Reset</Button>
    </form>
  )
}
