import { z } from 'zod'
import { BaseResponse } from './../../../shared/model/base-response-type'
import { EmployeeEditFormSchema } from './schemas'
export type GetEmployeesRequest = {
  portalId: number
  type?: string
}

export type GetEmployeesResponse = BaseResponse<Data[]>

export type Data = {
  id: number
  user_id: number
  status: Status
  schedule: null
  department: null
  groups: unknown
  type: RoleType
  roles: unknown
  permissions: unknown
  profile: Profile
}

export type Profile = {
  id: number
  user_id: number
  employee_id: number
  locale: string
  main_locale: string
  first_name: string | null
  last_name: string | null
  patronymic: string | null
  image: string | null
  mobile_phone: string | null
  mobile_whatsapp: boolean
  mobile_telegram: boolean
  mobile_viber: boolean
  work_phone: string | null
  work_whatsapp: boolean
  work_telegram: boolean
  work_viber: boolean
  internal_phone: string | null
  personal_email: string
  work_email: string | null
  telegram_name: string | null
  date_of_birth: string | null
  city: string | null
  country: string | null
  date_of_employment: string | null
}

export type Status = {
  dismiss: boolean
}

export type RoleType = {
  employee: boolean
  owner: boolean
  integrator: boolean
  administrator: boolean
}

export type EmployeeEditFormFields = z.infer<typeof EmployeeEditFormSchema>
