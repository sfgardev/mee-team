import { z } from 'zod'

export const EmployeeEditFormSchema = z.object({
  firstName: z.string().trim(),
  lastName: z.string().trim(),
  email: z.string().trim().email(),
  phone: z.string().trim(),

  local: z.string(),
  employeeId: z.number(),
})
