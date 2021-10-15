export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  budget: number;
  originalLanguage: string;
  overview: string;
  homepage: string;
  releaseDate: string;
  tagline?: string;
  voteAverage: number
}

export interface MoviesResponse {
  data: {
    results: Array<Movie>
  }
}
