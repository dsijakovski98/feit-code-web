import { type InferInput, email, nonEmpty, object, pipe, string } from 'valibot'

export const SubscribeEmailSchema = object({
  email: pipe(string(), nonEmpty('EMPTY'), email('INVALID')),
})

export type SubscribeEmailType = InferInput<typeof SubscribeEmailSchema>
