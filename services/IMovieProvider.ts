export interface IMovieProvider<T> {
  findMovieById(id: string): Promise<T | undefined>;
}
