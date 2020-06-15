import { app } from "../app";

async function main() {
  const { HOST, PORT } = process.env;
  if (!PORT) throw new Error("Expected env PORT");
  const port = Number.parseInt(PORT, 10);
  await app.listen(port, HOST);
}

main();
