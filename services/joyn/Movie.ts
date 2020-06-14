import { Rating } from "./Rating";

export interface Movie {
  description: string;
  duration: number;
  id: number;
  imdbId: string;
  languages: string[];
  originalLanguage: string;
  productionYear: number;
  studios: string[];
  title: string;
  userrating: Rating;
}
