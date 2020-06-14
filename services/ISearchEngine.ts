import { IMovieProvider } from "./IMovieProvider";
import { Movie } from "./Movie";

export interface ISearchEngine extends IMovieProvider<Movie> {
  findMoviesByFields(pairs: [string, string]): Promise<Movie[]>;
}
