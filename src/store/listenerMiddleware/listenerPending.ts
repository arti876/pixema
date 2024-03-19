import { Dispatch } from '@reduxjs/toolkit';
import { errorNull, statusLoading, statusShowMore } from '../Slice/filmsSlice';

const pendingFetchFilmsMain = 'fetchFilmsMain/pending';
const pendingFetchTrendsFilms = 'fetchTrendsFilms/pending';
const pendingFetchFilterFilms = 'fetchFilterFilms/pending';
const pendingFetchFilmsFavorites = 'fetchFilmsFavorites/pending';
const pendingFetchNextPageFilms = 'fetchNextPageFilms/pending';
const pendingFetchFilmPage = 'fetchFilmPage/pending';

const pendingAll = [
  pendingFetchFilmsMain,
  pendingFetchTrendsFilms,
  pendingFetchFilterFilms,
  pendingFetchFilmsFavorites,
  pendingFetchFilmPage,
];

const listenerPending =
  ({ dispatch }: { dispatch: Dispatch }) =>
  (next: (arg: unknown) => void) =>
  (action: { type: string; payload: unknown }) => {
    if (pendingAll.includes(action.type)) {
      dispatch(statusLoading());
      dispatch(errorNull());
      next(action);
    } else if (pendingFetchNextPageFilms.includes(action.type)) {
      dispatch(statusShowMore());
      dispatch(errorNull());
      next(action);
    } else {
      return next(action);
    }
  };

export { listenerPending };
