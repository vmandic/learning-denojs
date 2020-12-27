import { Router, httpErrors } from "https://deno.land/x/oak/mod.ts";

const r = new Router();

const tasks = [
    { id: 1, name: "task 1" },
    { id: 2, name: "task 2" },
    { id: 3, name: "task 3" },
];

r.get("/tasks", ctx => {
    ctx.response.body = tasks;
});

r.get("/tasks/:id", ctx => {
    const id = Number(ctx?.params?.id);
    const task = tasks.find(x => x.id == id);

    if (!task) {
        throw new httpErrors.NotFound();
    } else {
        ctx.response.body = task;
    }
});

export default r;