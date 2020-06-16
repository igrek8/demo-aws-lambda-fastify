import { Container } from "typedi";

import { SearchEngine } from "./SearchEngine";

describe("SearchEngine", () => {
  test("getMovieById returns movie by joyn id", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMovieById("3532674")).resolves.toMatchObject({
      id: 3532674,
      Title: "Sin City",
    });
  });

  test("getMovieById returns movie by imdb id", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMovieById("tt0401792")).resolves.toMatchObject({
      id: 3532674,
      Title: "Sin City",
    });
  });

  test("search by title", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMoviesBySearch({ title: "Sin City" })).resolves.toEqual({
      matches: 1,
      movies: expect.arrayContaining([
        expect.objectContaining({
          id: 3532674,
          Title: "Sin City",
        }),
      ]),
    });
  });

  test("search by director", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMoviesBySearch({ director: "Frank Miller" })).resolves.toEqual({
      matches: 1,
      movies: expect.arrayContaining([
        expect.objectContaining({
          id: 3532674,
          Title: "Sin City",
        }),
      ]),
    });
  });

  test("all terms matched", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMoviesBySearch({ director: "Frank Miller", title: "Sin City" })).resolves.toEqual({
      matches: 1,
      movies: expect.arrayContaining([
        expect.objectContaining({
          id: 3532674,
          Title: "Sin City",
        }),
      ]),
    });
  });

  test("not all terms matched", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMoviesBySearch({ director: "Frank Miller", title: "Forest City" })).resolves.toEqual({
      matches: 0,
      movies: expect.arrayContaining([
        expect.objectContaining({ id: 3532674 }),
        expect.objectContaining({ id: 5979300 }),
        expect.objectContaining({ id: 11043689 }),
        expect.objectContaining({ id: 11528860 }),
      ]),
    });
  });

  test("search by non-existing director", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMoviesBySearch({ director: "Oliver Twist" })).resolves.toEqual({
      matches: 0,
      movies: expect.arrayContaining([
        expect.objectContaining({ id: 3532674 }),
        expect.objectContaining({ id: 5979300 }),
        expect.objectContaining({ id: 11043689 }),
        expect.objectContaining({ id: 11528860 }),
      ]),
    });
  });
});
