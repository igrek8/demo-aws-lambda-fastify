import { IMovieProvider } from "./IMovieProvider";
import { Movie } from "./omdb";

export interface IOmdbProvider extends IMovieProvider<Movie> {}
