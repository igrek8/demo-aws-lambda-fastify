import { Movie } from "./engine/Movie";
import { IMovieProvider } from "./IMovieProvider";

export interface ISearchEngineResponse<T> {
  movies: T[];
  matches?: number;
}

export interface ISearchEngine extends IMovieProvider<Movie> {
  getMoviesBySearch(search: Record<string, string>): Promise<ISearchEngineResponse<Movie>>;
}
