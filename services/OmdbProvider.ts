import fetch from "node-fetch";
import { Service } from "typedi";

import { IOmdbProvider } from "./IOmdbProvider";
import { Logger } from "./Logger";
import * as omdb from "./omdb";

const { OMDB_BASE_URL, OMDB_ACCESS_TOKEN } = process.env;

@Service()
export class OmdbProvider implements IOmdbProvider {
  constructor(protected logger: Logger) {}

  async getMovieById(id: string): Promise<omdb.Movie | undefined> {
    this.logger.debug("fetching omdb for movie=%s", id);
    const url = `${OMDB_BASE_URL}/?i=${id}&apikey=${OMDB_ACCESS_TOKEN}&plot=full`;
    const res = await fetch(url);
    const isJSON = res.headers.get("content-type")?.startsWith("application/json");
    try {
      if (isJSON) {
        const data: omdb.Movie | omdb.Error = await res.json();
        if (omdb.isError(data)) throw new Error(data.Error);
        this.logger.debug("fetched movie=%s", id);
        return data;
      }
      const text = await res.text();
      throw new Error(text);
    } catch (err) {
      this.logger.debug("failed to fetch omdb movie=%s, error=%s", id, err.message);
      return undefined;
    }
  }
}
