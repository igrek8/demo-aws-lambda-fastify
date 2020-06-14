import * as joyn from "./joyn";
import * as omdb from "./omdb";

export interface Movie extends Omit<joyn.Movie, "userrating">, Omit<omdb.Movie, "Director" | "Writer" | "Actors"> {
  Director: string[];
  Writer: string[];
  Actors: string[];
}
