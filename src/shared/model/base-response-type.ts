export type BaseResponse<T> = {
  success: boolean
  message: string
  data: T
}

export type ApiError = {
  data: {
    errors: Record<string, string[]>
    message: string
    success: false
  }
  status: number
}
