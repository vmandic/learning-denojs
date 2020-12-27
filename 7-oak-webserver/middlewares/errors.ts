import { isHttpError, Status } from "https://deno.land/x/oak/mod.ts";

export default async (ctx: any, next: any) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.NotFound:
          console.log(
            ctx.request.method + " " + ctx.request.url + " - not found",
          );
          ctx.response.body = "Requested resource not found.\n";
          break;
        default:
          console.log(
            "Server error: " + ctx.request.method + " " + ctx.request.url +
              ", error: " + err.message,
          );
          ctx.response.body = "Server error: " + err.status + "\n";
      }
    } else {
      // rethrow if you can't handle the error
      throw err;
    }
  }
};
