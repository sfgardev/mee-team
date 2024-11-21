import { ApiError } from '../model/base-response-type'

const isObject = (value: unknown): value is object => {
  return typeof value === 'object' && !Array.isArray(value) && value !== null
}

export const isApiError = (error: unknown): error is ApiError => {
  return (
    isObject(error) &&
    'data' in error &&
    isObject(error.data) &&
    'errors' in error.data
  )
}
