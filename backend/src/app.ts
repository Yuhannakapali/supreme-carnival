import fastify from "fastify";

export const server = fastify();

server.get("/", async (request, reply) => {
  return {
    status: 200,
    message: "ready to rock and roll!"
  };
});

server.get("/ping", async (request, reply) => {
  return "pong\n";
});
