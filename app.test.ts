import { app } from "./app";

test("GET 200 /api/movies/:id returns if movie found", async () => {
  const res = await app.inject({ method: "GET", path: "/api/movies/3532674" });
  expect(res.statusCode).toBe(200);
  expect(res.headers).toMatchObject({ "content-type": "application/json; charset=utf-8" });
  expect(res.json()).toMatchObject({ id: 3532674 });
});

test("GET 404 /api/movies/:id returns if no movie found", async () => {
  const res = await app.inject({ method: "GET", path: "/api/movies/0" });
  expect(res.statusCode).toBe(404);
  expect(res.headers).toMatchObject({ "content-type": "application/json; charset=utf-8" });
  expect(res.json()).toMatchObject({ message: "Not Found" });
});

test("GET 200 /api/movies returns all movies by default", async () => {
  const res = await app.inject({ method: "GET", path: "/api/movies" });
  expect(res.statusCode).toBe(200);
  expect(res.headers).toMatchObject({ "content-type": "application/json; charset=utf-8" });
  expect(res.json()).toEqual({
    matches: undefined,
    movies: expect.arrayContaining([
      expect.objectContaining({ id: 3532674 }),
      expect.objectContaining({ id: 5979300 }),
      expect.objectContaining({ id: 11043689 }),
      expect.objectContaining({ id: 11528860 }),
    ]),
  });
});

test("GET 200 /api/movies? returns matched movies", async () => {
  const res = await app.inject({
    method: "GET",
    path: "/api/movies",
    query: { director: "Frank Miller" },
  });
  expect(res.statusCode).toBe(200);
  expect(res.headers).toMatchObject({ "content-type": "application/json; charset=utf-8" });
  expect(res.json()).toEqual({
    matches: 1,
    movies: expect.arrayContaining([
      expect.objectContaining({
        id: 3532674,
      }),
    ]),
  });
});

test("GET 200 /api/movies? returns all movies if no matches", async () => {
  const res = await app.inject({
    method: "GET",
    path: "/api/movies",
    query: { director: "Oliver Twist" },
  });
  expect(res.statusCode).toBe(200);
  expect(res.headers).toMatchObject({ "content-type": "application/json; charset=utf-8" });
  expect(res.json()).toEqual({
    matches: 0,
    movies: expect.arrayContaining([
      expect.objectContaining({ id: 3532674 }),
      expect.objectContaining({ id: 5979300 }),
      expect.objectContaining({ id: 11043689 }),
      expect.objectContaining({ id: 11528860 }),
    ]),
  });
});
