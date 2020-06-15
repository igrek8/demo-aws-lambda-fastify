import { Container } from "typedi";

import { JoynProvider } from "./JoynProvider";

describe("JoynProvider", () => {
  test("getMovieById returns movie by joyn id", async () => {
    const jp = Container.get(JoynProvider);
    await expect(jp.getMovieById("3532674")).resolves.toMatchObject({
      title: "Sin City",
    });
  });

  test("getMovieById returns movie by imdb id", async () => {
    const jp = Container.get(JoynProvider);
    await expect(jp.getMovieById("tt0401792")).resolves.toMatchObject({
      title: "Sin City",
    });
  });

  test("getMovieById returns undefined on nonexisting movie", async () => {
    const jp = Container.get(JoynProvider);
    await expect(jp.getMovieById("0")).resolves.toBe(void 0);
  });

  test("getMovies returns movies", async () => {
    const jp = Container.get(JoynProvider);
    await expect(jp.getMovies()).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 3532674 }),
        expect.objectContaining({ id: 5979300 }),
        expect.objectContaining({ id: 11043689 }),
        expect.objectContaining({ id: 11528860 }),
      ])
    );
  });
});
