export default async (ctx: any, next: any) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  if (rt) {
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
  }
};
