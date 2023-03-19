import z from 'zod'
import {buildJsonSchemas} from 'fastify-zod'

const task = {
  title: z.string(),
  isComplete: z.boolean(),
}

const createTaskSchema = z.object({
  ...task,
})

const createTaskResponseSchema = z.object({
  ...task,
  id: z.number()
})


export type ICreateTask = z.infer<typeof createTaskSchema>

export const { schemas: taskSchema, $ref } = buildJsonSchemas({
  createTaskSchema,
  createTaskResponseSchema,
})