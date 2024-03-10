export interface IPoster {
  filmId?: number;
  imdbId?: number;
  kinopoiskId?: number;
  countries?: [{ country: string }];
  genres?: [{ genre: string }];
  nameRu?: string;
  posterUrl?: string;
  ratingImdb?: number;
  ratingKinopoisk?: number;
  year?: number;
  filmLength?: number;
  description?: string;
}

export const PosterData: IPoster = {
  filmId: 0,
  imdbId: 0,
  kinopoiskId: 0,
  countries: [{ country: '' }],
  genres: [{ genre: '' }],
  nameRu: '',
  posterUrl: '',
  ratingImdb: 0,
  ratingKinopoisk: 0,
  year: 0,
  filmLength: 0,
  description: '',
};
