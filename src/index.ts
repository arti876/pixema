export enum RIGHTS {
  RIGHTS_RESERVED = '© All Rights Reserved',
}

export enum ThemeVariant {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum RoutePath {
  ROOT = '/',
  TRENDS = 'trends',
  FAVORITES = 'favorites',
  SETTING = 'setting',
  NOT_FOUND = '*',
}

export enum IconId {
  FILTER = 'filter',
  ARROW_DOWN = 'arrowDown',
  PIXEMA = 'pixema',
  HOME = 'home',
  TRENDS = 'trends',
  FAVORITES = 'favorites',
  SETTING = 'setting',
  SHARE = 'share',
  ARROW = 'arrow',
  MENU = 'menu',
  CLOSE = 'close',
  USER = 'user',
  ARROW_RIGHT = 'arrowRight',
  CHECK = 'check',
  SPINNER = 'spinner',
}

export interface IFilm {
  countries: [];
  genres: [];
  imdbId: string;
  kinopoiskId: number;
  nameRu: string;
  posterUrl: string;
  ratingImdb: number;
  year: number;
}
