import { Router } from "https://deno.land/x/oak/mod.ts";

const r = new Router();

r.get("/", ctx => {
    ctx.response.body = "Hello from Oak web server! Try querying /tasks...\n";
});

export default r;