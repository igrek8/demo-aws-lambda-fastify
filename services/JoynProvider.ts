import { promises as fs } from "fs";
import { join, resolve } from "path";
import { Service } from "typedi";

import { IJoynProvider } from "./IJoynProvider";
import { Movie } from "./joyn";
import { Logger } from "./Logger";

@Service()
export class JoynProvider implements IJoynProvider {
  protected preload = this.preloadMovies();

  constructor(protected readonly logger: Logger) {}

  private async preloadMovies() {
    const dir = resolve(process.cwd(), "movies");
    this.logger.info("preloading movies from %s", dir);
    const entries = await fs.readdir(dir);
    const joynMovies: Record<string, Movie> = {};
    const imdbMovies: Record<string, Movie> = {};
    for await (const entry of entries) {
      const fp = join(dir, entry);
      const stat = await fs.stat(fp);
      if (stat.isFile()) {
        this.logger.debug("load movie %s", fp);
        const buf = await fs.readFile(join(dir, entry));
        const movie: Movie = JSON.parse(buf.toString());
        joynMovies[movie.id] = movie;
        imdbMovies[movie.imdbId] = movie;
      }
    }
    this.logger.debug("preloading movies done");
    return { joynMovies, imdbMovies };
  }

  async getMovieById(id: string): Promise<Movie | undefined> {
    const { joynMovies, imdbMovies } = await this.preload;
    this.logger.debug("find movie id=%s", id);
    return joynMovies[id] ?? imdbMovies[id];
  }

  async getMovies(): Promise<Movie[]> {
    const { joynMovies } = await this.preload;
    return Object.values(joynMovies);
  }
}
