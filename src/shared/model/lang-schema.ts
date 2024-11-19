import { z } from 'zod'

export const LangSchema = z
  .union([z.literal('en'), z.literal('ru'), z.literal('')])
  .superRefine((data, ctx) => {
    if (!data) {
      ctx.addIssue({
        code: 'custom',
        message: 'Required field',
      })
    }
  })
