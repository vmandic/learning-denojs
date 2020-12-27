const hostname = "0.0.0.0";
const port = 8080;
const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);
for await (const conn of listener) {
  Deno.copy(conn, conn);
  Deno.copy(conn, Deno.stdout);
}

// deno run --allow-net 4-sample-httpserver.ts
// curl 0.0.0.0:8080