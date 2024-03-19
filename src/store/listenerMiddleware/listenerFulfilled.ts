import { Dispatch } from '@reduxjs/toolkit';
import { getFilmId } from '../Slice/filmPageSlice';
import {
  currentPage,
  addPage,
  resolvedFirstPage,
  statusResolved,
  nextPage,
  nullPage,
} from '../Slice/filmsSlice';

const fulfilledFetchFilmsMain = 'fetchFilmsMain/fulfilled';
const fulfilledFetchTrendsFilms = 'fetchTrendsFilms/fulfilled';
const fulfilledFetchFilterFilms = 'fetchFilterFilms/fulfilled';
const fulfilledFetchNextPageFilms = 'fetchNextPageFilms/fulfilled';
const fulfilledFetchFilmPage = 'fetchFilmPage/fulfilled';
const fulfilledFetchFilmsFavorites = 'fetchFilmsFavorites/fulfilled';

const listenerFulfilled =
  ({ dispatch }: { dispatch: Dispatch }) =>
  (next: (arg: unknown) => void) =>
  (action: { type: string; payload: unknown }) => {
    if (
      [fulfilledFetchFilmsMain, fulfilledFetchTrendsFilms, fulfilledFetchFilmsFavorites].includes(
        action.type,
      )
    ) {
      dispatch(statusResolved());
      dispatch(resolvedFirstPage(action.payload));
      dispatch(currentPage(2));
      next(action);
    } else if ([fulfilledFetchFilmPage].includes(action.type)) {
      dispatch(statusResolved());
      dispatch(getFilmId(action.payload));
      next(action);
    } else if ([fulfilledFetchFilterFilms].includes(action.type)) {
      dispatch(statusResolved());
      dispatch(nullPage());
      dispatch(addPage(action.payload));
      next(action);
    } else if ([fulfilledFetchNextPageFilms].includes(action.type)) {
      dispatch(statusResolved());
      dispatch(addPage(action.payload));
      dispatch(nextPage());
      next(action);
    } else {
      return next(action);
    }
  };

export { listenerFulfilled };
