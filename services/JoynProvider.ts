import { Logger as ILogger } from "fastify";
import { promises as fs } from "fs";
import { join } from "path";
import { Inject, Service } from "typedi";

import { IJoynProvider } from "./IJoynProvider";
import { Movie } from "./joyn";
import { Logger } from "./Logger";

interface JoynProviderResponse {
  joynMovies: Record<string, Movie>;
  imdbMovies: Record<string, Movie>;
}

@Service()
export class JoynProvider implements IJoynProvider {
  @Inject("MOVIES_DIR")
  protected readonly MOVIES_DIR!: string;
  protected cache?: Promise<JoynProviderResponse>;

  constructor(@Inject(() => Logger) protected readonly logger: ILogger) {}

  private async loadMovies(): Promise<JoynProviderResponse> {
    this.logger.info("preloading movies from %s", this.MOVIES_DIR);
    const entries = await fs.readdir(this.MOVIES_DIR);
    const joynMovies: Record<string, Movie> = {};
    const imdbMovies: Record<string, Movie> = {};
    for await (const entry of entries) {
      const fp = join(this.MOVIES_DIR, entry);
      const stat = await fs.stat(fp);
      if (stat.isFile()) {
        this.logger.debug("load movie %s", fp);
        const buf = await fs.readFile(join(this.MOVIES_DIR, entry));
        const movie: Movie = JSON.parse(buf.toString());
        joynMovies[movie.id] = movie;
        imdbMovies[movie.imdbId] = movie;
      }
    }
    this.logger.debug("movies preloaded");
    return { joynMovies, imdbMovies };
  }

  protected lazyLoad() {
    if (!this.cache) this.cache = this.loadMovies();
    return this.cache;
  }

  async getMovieById(id: string): Promise<Movie | undefined> {
    const { joynMovies, imdbMovies } = await this.lazyLoad();
    this.logger.debug("find movie id=%s", id);
    return joynMovies[id] ?? imdbMovies[id];
  }

  async getMovies(): Promise<Movie[]> {
    const { joynMovies } = await this.lazyLoad();
    return Object.values(joynMovies);
  }
}
