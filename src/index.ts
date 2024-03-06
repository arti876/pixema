export enum RIGHTS {
  RIGHTS_RESERVED = '© All Rights Reserved',
}

export enum ThemeVariant {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum RoutePath {
  ROOT = '/',
  // SIGN_IN = '/sign-in',
  // SIGN_UP = '/sign-up',
  // SUCCESS = '/success',
  // BLOG = 'blog',
  // ALL = 'all',
  // FAVORITES = 'favorites',
  // POPULAR = 'popular',
  // BLOG_ALL = 'blog/all',
  // BLOG_FAVORITES = 'blog/favorites',
  // BLOG_POPULAR = 'blog/popular',
  // POSTS = 'posts',
  // POSTS_ID = '/posts/:idPost',
  // SEARCH_RESULT = 'search-result',
  // ADVANCED_LEVEL = 'advanced-level',
  // ADD_POST = 'add-post',
  // NOT_FOUND = '*',
}

export enum IconId {
  FILTER = 'filter',
  ARROW_DOWN = 'arrowDown',
  PIXEMA = 'pixema',
  HOME = 'Home',
  TRENDS = 'Trends',
  FAVORITES = 'Favorites',
  SETTING = 'Setting',
  SHARE = 'Share',
  ARROW = 'Arrow',
  MENU = 'Menu',
  CLOSE = 'Close',
  USER = 'User',
  ARROW_RIGHT = 'arrowRight',
  CHECK = 'Check',
  SPINNER = 'Spinner',
}

export interface IPosters {
  rating: number;
  movieTitle: string;
  genre: string[];
  image: string;
}
