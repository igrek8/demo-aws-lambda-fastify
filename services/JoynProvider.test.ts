import { Container } from "typedi";

import { JoynProvider } from "./JoynProvider";

describe("JoynProvider", () => {
  test("findMovieById returns movie by joyn id", async () => {
    const jp = Container.get(JoynProvider);
    await expect(jp.findMovieById("3532674")).resolves.toMatchObject({
      title: "Sin City",
    });
  });

  test("findMovieById returns movie by imdb id", async () => {
    const jp = Container.get(JoynProvider);
    await expect(jp.findMovieById("tt0401792")).resolves.toMatchObject({
      title: "Sin City",
    });
  });

  test("findMovieById returns undefined on nonexisting movie", async () => {
    const jp = Container.get(JoynProvider);
    await expect(jp.findMovieById("0")).resolves.toBe(void 0);
  });
});
