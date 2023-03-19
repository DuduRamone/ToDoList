import fastify from "fastify" // importa o fastify

const server = fastify() // colocar o server em uma variavel

server.get("/healthchek", async function () {
  return { status: "ok" }
}) // essa função existe para testar se o servidor ta on

async function main() {
  try {
    await server.listen({port: 3000})
    console.log("Server ready at http://3000")
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
} // essafunção inicia o server

main() // iniciando o server
