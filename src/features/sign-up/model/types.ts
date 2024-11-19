import { BaseResponse } from '../../../shared/model'

export type SignUpRequest = {
  email: string
  lang: string
}

export type SignUpResponse = BaseResponse<Data>

type Data = {
  name: null
  email: string
  integration: boolean
  locale: string
  updated_at: string
  created_at: string
  id: number
  current_portal_id: number
  token: string
  password: string
}
