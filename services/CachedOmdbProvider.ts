import { Logger as ILogger } from "fastify";
import LRU from "lru-cache";
import { Inject } from "typedi";

import { IOmdbProvider } from "./IOmdbProvider";
import { Logger } from "./Logger";
import { Movie } from "./omdb/Movie";
import { OmdbProvider } from "./OmdbProvider";

/**
 * OmdbProvider that uses LRU cache to prevent access token from expiring
 */
export class CachedOmdbProvider implements IOmdbProvider {
  @Inject("LRU_SIZE")
  protected readonly LRU_SIZE!: number;

  /**
   * LRU_MAX_AGE is recommended to be
   * `24h * 5 movies / 1000 OMDB API limit`
   */
  @Inject("LRU_MAX_AGE")
  protected readonly LRU_MAX_AGE!: number;

  protected cache = new LRU<string, Movie>({
    max: this.LRU_SIZE,
    maxAge: this.LRU_MAX_AGE,
    updateAgeOnGet: false,
  });

  constructor(
    @Inject(() => Logger) protected readonly logger: ILogger,
    @Inject(() => OmdbProvider) protected readonly omdb: IOmdbProvider
  ) {}

  async getMovieById(id: string): Promise<Movie | undefined> {
    let movie = this.cache.get(id);
    if (movie) {
      this.logger.debug("returning cached omdb movie %s", id);
      return movie;
    }
    this.logger.debug("fetching omdb movie %s", id);
    movie = await this.omdb.getMovieById(id);
    if (movie) {
      this.logger.debug("caching omdb movie %s", id);
      this.cache.set(id, movie);
    }
    return movie;
  }
}
