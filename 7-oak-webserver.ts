import { Application } from "https://deno.land/x/oak@v6.4.1/mod.ts";

const app = new Application();

app.use((ctx) => {
  console.log("Request received " + new Date().toISOString());
  ctx.response.body = "Hello World from Oak web server running on DenoJS!\n";
});

const port = 8000;
console.log(`Oak listening on port: ${port}`);

await app.listen({ port });
