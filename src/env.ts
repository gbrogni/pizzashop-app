import { z } from 'zod'

const envSchema = z.object({
    VITE_API_URL: z.string().url(),
})
// @ts-ignore
export const env = import.meta.env;


// export const env = envSchema.parse(import.meta.env)