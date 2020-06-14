import { IMovieProvider } from "./IMovieProvider";
import { Movie } from "./joyn";

export interface IJoynProvider extends IMovieProvider<Movie> {}
