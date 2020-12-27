// NOTE: start HTTP app with: deno run -A 7-oak-webserver/app.ts

import { Application, httpErrors } from "https://deno.land/x/oak/mod.ts";
const app = new Application();

// NOTE: order of middleware is very important below...

import loggingMiddleware from "./middlewares/logger.ts";
app.use(loggingMiddleware);

import errorsMiddleware from "./middlewares/errors.ts";
app.use(errorsMiddleware);

import timerMiddleware from "./middlewares/timer.ts";
app.use(timerMiddleware);

import homeRouter from "./controllers/home.ts";
import tasksRouter from "./controllers/tasks.ts";
app.use(homeRouter.routes());
app.use(tasksRouter.routes());

// NOTE: if not matched by now it is HTTP 404
app.use(() => {
  throw new httpErrors.NotFound();
});

const port = 8000;

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

app.addEventListener("error", (evt) => {
  // Will log the thrown error to the console.
  console.error(evt.error);
});

await app.listen({ port });
