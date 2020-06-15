import { Movie } from "./engine/Movie";
import { IMovieProvider } from "./IMovieProvider";

export interface ISearchEngine extends IMovieProvider<Movie> {
  getMoviesBySearch(search?: Record<string, string>): Promise<Movie[]>;
}
