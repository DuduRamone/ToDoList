import z, { boolean } from 'zod'
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

const updateTaskSchema = z.object({
  isComplete: z.boolean(),
})


export type ICreateTask = z.infer<typeof createTaskSchema>
export type IUpdateTask = z.infer<typeof updateTaskSchema>

export const { schemas: taskSchema, $ref } = buildJsonSchemas({
  createTaskSchema,
  createTaskResponseSchema,
  updateTaskSchema,
})