import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../../shared/ui/button'
import { Input } from '../../../shared/ui/input'
import { Select } from '../../../shared/ui/select'
import s from './SignInForm.module.scss'
import { z } from 'zod'
import { LangSchema } from '../../../shared/model'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInApi } from '../api/sign-in-api'

const options = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
]

const SignInFormSchema = z.object({
  email: z.string().trim().email(),
  password: z.string(),
  lang: LangSchema,
})

type FormFields = z.infer<typeof SignInFormSchema>

export const SignInForm = () => {
  const [signIn, { isLoading }] = signInApi.useSignInMutation()

  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      email: '',
      password: '',
      lang: '',
    },
    resolver: zodResolver(SignInFormSchema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await signIn(data).unwrap()
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
        {...register('email')}
      />
      <Input
        type="password"
        placeholder="Enter password..."
        label="Password"
        {...register('password')}
      />
      <Select
        placeholder="Select language"
        options={options}
        {...register('lang')}
      />
      <Button disabled={isLoading}>Sign in</Button>
    </form>
  )
}
