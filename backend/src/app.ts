import fastify from "fastify";

export const server = fastify();

server.get("/",  (request, reply) => {
  return {
    status: 200,
    message: "ready to rock and roll!"
  };
});

server.get("/ping",  (request, reply) => {
  return "pong\n";
});


export const runServer = (port: number = 3001) => {
  server.listen({ port }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};