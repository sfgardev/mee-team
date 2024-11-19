import { BaseResponse } from '../../../shared/model'

export type ResetPasswordRequest = {
  email: string
}

export type ResetPasswordResponse = BaseResponse<[]>
