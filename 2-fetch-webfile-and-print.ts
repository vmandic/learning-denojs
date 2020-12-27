const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

// deno run --allow-net 2-fetch-webfile-and-print.ts https://www.google.com