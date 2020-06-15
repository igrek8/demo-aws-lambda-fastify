import { FastifyInstance } from "fastify";
import { NotFound } from "http-errors";
import Container from "typedi";

import { ISearchEngine } from "./services/ISearchEngine";
import { SearchEngine } from "./services/SearchEngine";

export function createAPI(app: FastifyInstance) {
  /**
   * Displays information about movie with id
   * GET /api/movies/:id
   */
  app.route({
    method: "GET",
    url: "/api/movies/:id",
    schema: {
      params: {
        id: { type: "string" },
      },
    },
    handler: async (req, res) => {
      const searchEngine: ISearchEngine = Container.get(SearchEngine);
      const movie = await searchEngine.getMovieById(req.params.id);
      if (!movie) throw new NotFound();
      res.status(200);
      res.type("application/json");
      return movie;
    },
  });

  /**
   * GET /api/movies
   * GET /api/movies?director=Frank Miller
   */
  app.route({
    method: "GET",
    url: "/api/movies",
    handler: async (req, res) => {
      const searchEngine: ISearchEngine = Container.get(SearchEngine);
      const movies = await searchEngine.getMoviesBySearch(req.query);
      res.status(200);
      res.type("application/json");
      return movies;
    },
  });

  return app;
}
