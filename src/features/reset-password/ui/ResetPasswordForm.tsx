import { z } from 'zod'
import { Input } from '../../../shared/ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import s from './ResetPassword.module.scss'
import { Button } from '../../../shared/ui/button'
import { resetPasswordApi } from '../api/reset-password-api'
import { useNavigate } from 'react-router-dom'

const ResetPaswordFormSchema = z.object({
  email: z.string().trim().email(),
})

type FormFields = z.infer<typeof ResetPaswordFormSchema>

export const ResetPasswordForm = () => {
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
      await resetPassword(data).unwrap()
      navigate('/sign-in')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="Enter email..."
        label="Email"
        errorText={errors.email?.message}
        {...register('email')}
      />
      <Button disabled={isLoading}>Reset</Button>
    </form>
  )
}
