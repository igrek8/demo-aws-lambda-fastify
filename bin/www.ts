import "reflect-metadata";

import { app } from "../app";

async function main() {
  if (!process.env.PORT) throw new Error("Expected env PORT");
  const port = Number.parseInt(process.env.PORT, 10);
  await app.listen(port, process.env.HOST);
}

main();
