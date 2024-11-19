import { z } from 'zod'
import { Button } from '../../../shared/ui/button'
import { Input } from '../../../shared/ui/input'
import { Select } from '../../../shared/ui/select'
import s from './SignUpForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpApi } from '../api/sign-up-api'
import { useNavigate } from 'react-router-dom'

const options = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
]

const SignUpFormSchema = z.object({
  email: z.string().trim().email(),
  lang: z
    .union([z.literal('en'), z.literal('ru'), z.literal('')])
    .superRefine((data, ctx) => {
      if (!data) {
        ctx.addIssue({
          code: 'custom',
          message: 'Required field',
        })
      }
    }),
})

type FormFields = z.infer<typeof SignUpFormSchema>

export const SignUpForm = () => {
  const [signUp, { isLoading }] = signUpApi.useSignUpMutation()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      email: '',
      lang: '',
    },
    resolver: zodResolver(SignUpFormSchema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await signUp(data).unwrap()
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
        {...register('email')}
      />
      <Select
        placeholder="Select language"
        options={options}
        {...register('lang')}
      />
      <Button disabled={isLoading}>Sign up</Button>
    </form>
  )
}
