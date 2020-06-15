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

  test("getMoviesBySearch returns movie by search", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMoviesBySearch({ title: "Sin City" })).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 3532674,
          Title: "Sin City",
        }),
      ])
    );
  });

  test("getMoviesBySearch returns movie by search", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMoviesBySearch({ director: "Frank Miller" })).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 3532674,
          Title: "Sin City",
        }),
      ])
    );
  });

  test("getMoviesBySearch returns all movies if no matched", async () => {
    const se = Container.get(SearchEngine);
    await expect(se.getMoviesBySearch({ director: "Oliver Twist" })).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 3532674 }),
        expect.objectContaining({ id: 5979300 }),
        expect.objectContaining({ id: 11043689 }),
        expect.objectContaining({ id: 11528860 }),
      ])
    );
  });
});
