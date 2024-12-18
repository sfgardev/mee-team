import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../../shared/ui/button'
import { Input } from '../../../shared/ui/input'
import { Select } from '../../../shared/ui/select'
import s from './SignInForm.module.scss'
import { z } from 'zod'
import { LangSchema } from '../../../shared/model'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInApi } from '../api/sign-in-api'
import { Link, useNavigate } from 'react-router-dom'
import { useNotificationContext } from '../../../shared/providers'

const options = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
]

const SignInFormSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1, { message: 'Required field' }),
  lang: LangSchema,
})

type FormFields = z.infer<typeof SignInFormSchema>

export const SignInForm = () => {
  const { openSuccessNotification, openErrorNotification } =
    useNotificationContext()

  const [signIn, { isLoading }] = signInApi.useSignInMutation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      email: '',
      password: '',
      lang: '',
    },
    resolver: zodResolver(SignInFormSchema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await signIn(data).unwrap()
      window.localStorage.setItem('accessToken', response.data.token)
      navigate('/employees')
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
      <Input
        type="password"
        placeholder="Enter password..."
        label="Password"
        errorText={errors.password?.message}
        {...register('password')}
      />
      <Select
        placeholder="Select language"
        options={options}
        errorText={errors.lang?.message}
        {...register('lang')}
      />
      <div className={s.links}>
        <Link className={s.link} to="/reset-password">
          Reset password
        </Link>
        <Link className={s.link} to="/sign-up">
          Sign up
        </Link>
      </div>
      <Button disabled={isLoading}>Sign in</Button>
    </form>
  )
}
