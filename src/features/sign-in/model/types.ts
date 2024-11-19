import { BaseResponse } from '../../../shared/model'

export type SignInRequest = {
  email: string
  password: string
  type?: string
  lang: string
}

export type SignInResponse = BaseResponse<Data>

type Data = {
  token: string
  userId: number
}
