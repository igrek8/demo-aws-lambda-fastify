import Container from "typedi";

import { app } from "../app";

async function main() {
  const host = Container.get<string>("HOST");
  const port = Container.get<number>("PORT");
  await app.listen(port, host);
}

main();
