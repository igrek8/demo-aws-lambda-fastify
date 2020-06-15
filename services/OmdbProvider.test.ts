import { Container } from "typedi";

import { OmdbProvider } from "./OmdbProvider";

describe("OmdbProvider", () => {
  test("getMovieById returns movie by joyn id", async () => {
    const omdb = Container.get(OmdbProvider);
    await expect(omdb.getMovieById("tt0097576")).resolves.toMatchObject({
      Title: "Indiana Jones and the Last Crusade",
    });
  });

  test("getMovieById returns undefined on nonexisting movie", async () => {
    const omdb = Container.get(OmdbProvider);
    await expect(omdb.getMovieById("0")).resolves.toBe(void 0);
  });
});
