import fastify from "fastify" // importa o fastify
import { taskRoutes } from "./modules/task.route"
import { taskSchema } from "./modules/task.schema"
import cors from "@fastify/cors"

const server = fastify() // colocar o server em uma variavel

async function main() {
  await server.register(cors, {
    origin: "*",
    methods: ["GET", "DELETE", "POST", "PUT"],
    optionsSuccessStatus: 200,
  })

  server.register(taskRoutes, { prefix: "/api/task" })

  for (const schema of [...taskSchema]) {
    server.addSchema(schema)
  }

  try {
    await server.listen({ port: 3000 })
    console.log("Server ready at http://3000")
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
} // essafunção inicia o server

main() // iniciando o server
