import fastify from "fastify";
import fs from "fs";

export const server = fastify({
    logger: { level: "info" },
});

server.get("/", (request, reply) => {
    reply.code(200).send({
        status: 200,
        message: "Ready to Rock and Roll",
    });
});

server.get("/ping", (request, reply) => {
    return "pong\n";
});

server.get("/video", (request, reply) => {
    const file = fs.readFileSync("./src/public/index.html");
    reply.type("text/html").send(file);
});

server.get("/stream", (request, reply) => {
    const range = request.headers.range;
    if (!range) {
        return reply.status(400).send("Requires Range header");
    }
    const videoPath = `${__dirname}/public/demo.mp4`;
    const videoSize = fs.statSync(videoPath).size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    const videoStream = fs.createReadStream(videoPath, { start, end });
    Object.entries(headers).map(([key, value]) => {
        reply.header(key, value);
    });
    reply.type("video/mp4").code(206);
    return videoStream;
});

export const runServer = (port: number = 3001) => {
    server.listen({ port }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
};
