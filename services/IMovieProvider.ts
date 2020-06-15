export interface IMovieProvider<T> {
  getMovieById(id: string): Promise<T | undefined>;
}
