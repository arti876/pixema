import { Dispatch } from '@reduxjs/toolkit';
import { statusRejected } from '../Slice/filmsSlice';

const rejectedFetchFilmsMain = 'fetchFilmsMain/rejected';
const rejectedFetchTrendsFilms = 'fetchTrendsFilms/rejected';
const rejectedFetchFilterFilms = 'fetchFilterFilms/rejected';
const rejectedFetchFilmsFavorites = 'fetchFilmsFavorites/rejected';
const rejectedFetchNextPageFilms = 'fetchNextPageFilms/rejected';
const rejectedFetchFilmPage = 'fetchFilmPage/rejected';

const rejectedAll = [
  rejectedFetchFilmsMain,
  rejectedFetchTrendsFilms,
  rejectedFetchFilterFilms,
  rejectedFetchFilmsFavorites,
  rejectedFetchNextPageFilms,
  rejectedFetchFilmPage,
];

const listenerRejectedFilm =
  ({ dispatch }: { dispatch: Dispatch }) =>
  (next: (arg: unknown) => void) =>
  (action: { type: string; payload: unknown }) => {
    if (rejectedAll.includes(action.type)) {
      dispatch(statusRejected(action.payload));
      next(action);
    } else {
      return next(action);
    }
  };

export { listenerRejectedFilm };
