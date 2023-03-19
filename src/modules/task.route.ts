import { FastifyInstance } from "fastify"
import { createTaskHandler, deleteTaskHandler, getTaskHandler } from "./task.controller"
import { $ref } from "./task.schema"

export const taskRoutes = async (server: FastifyInstance) => {
  server.post(
    "/",
    {
      schema: {
        body: $ref("createTaskSchema"),
        response: {
          201: $ref("createTaskResponseSchema"),
        },
      },
    },
    createTaskHandler
  )

  server.get("/", getTaskHandler)

  server.delete("/delete/:id", deleteTaskHandler)
}
