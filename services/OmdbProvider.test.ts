import { Container } from "typedi";

import { OmdbProvider } from "./OmdbProvider";

describe("OmdbProvider", () => {
  test("findMovieById returns movie by joyn id", async () => {
    const omdb = Container.get(OmdbProvider);
    await expect(omdb.findMovieById("tt0097576")).resolves.toMatchObject({
      Title: "Indiana Jones and the Last Crusade",
    });
  });

  test("findMovieById returns undefined on nonexisting movie", async () => {
    const omdb = Container.get(OmdbProvider);
    await expect(omdb.findMovieById("0")).resolves.toBe(void 0);
  });
});
