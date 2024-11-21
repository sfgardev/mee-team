import { z } from 'zod'
import { Button } from '../../../shared/ui/button'
import { Input } from '../../../shared/ui/input'
import { Select } from '../../../shared/ui/select'
import s from './SignUpForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpApi } from '../api/sign-up-api'
import { useNavigate } from 'react-router-dom'
import { LangSchema } from '../../../shared/model'
import { useNotificationContext } from '../../../shared/providers'

const options = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
]

const SignUpFormSchema = z.object({
  email: z.string().trim().email(),
  lang: LangSchema,
})

type FormFields = z.infer<typeof SignUpFormSchema>

export const SignUpForm = () => {
  const { openSuccessNotification, openErrorNotification } =
    useNotificationContext()
  const [signUp, { isLoading }] = signUpApi.useSignUpMutation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      email: '',
      lang: '',
    },
    resolver: zodResolver(SignUpFormSchema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await signUp(data).unwrap()
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
      <Select
        placeholder="Select language"
        options={options}
        errorText={errors.lang?.message}
        {...register('lang')}
      />
      <Button disabled={isLoading}>Sign up</Button>
    </form>
  )
}
