import { Dispatch } from '@reduxjs/toolkit';
import { getFilmId } from './Slice/filmIdSlice';
import {
  currentPage,
  errorNull,
  addPage,
  resolvedFirstPage,
  statusLoading,
  statusRejected,
  statusResolved,
  statusShowMore,
  nextPage,
  nullPage,
} from './Slice/filmsSlice';

const pendingFetchFilmsMain = 'fetchFilmsMain/pending';
const pendingFetchTrendsFilms = 'fetchTrendsFilms/pending';
const pendingFetchFilterFilms = 'fetchFilterFilms/pending';
const pendingFetchFilmsFavorites = 'fetchFilmsFavorites/pending';
const pendingFetchNextPageFilms = 'fetchNextPageFilms/pending';
const pendingFetchFilmId = 'fetchFilmId/pending';

const rejectedFetchFilmsMain = 'fetchFilmsMain/rejected';
const rejectedFetchTrendsFilms = 'fetchTrendsFilms/rejected';
const rejectedFetchFilterFilms = 'fetchFilterFilms/rejected';
const rejectedFetchFilmsFavorites = 'fetchFilmsFavorites/rejected';
const rejectedFetchNextPageFilms = 'fetchNextPageFilms/rejected';
const rejectedFetchFilmId = 'fetchFilmId/rejected';

const fulfilledFetchFilmsMain = 'fetchFilmsMain/fulfilled';
const fulfilledFetchTrendsFilms = 'fetchTrendsFilms/fulfilled';
const fulfilledFetchFilterFilms = 'fetchFilterFilms/fulfilled';
const fulfilledFetchFilmsFavorites = 'fetchFilmsFavorites/fulfilled';
const fulfilledFetchNextPageFilms = 'fetchNextPageFilms/fulfilled';
const fulfilledFetchFilmId = 'fetchFilmId/fulfilled';

const pendingAll = [
  pendingFetchFilmsMain,
  pendingFetchTrendsFilms,
  pendingFetchFilterFilms,
  pendingFetchFilmsFavorites,
  pendingFetchFilmId,
];

const rejectedAll = [
  rejectedFetchFilmsMain,
  rejectedFetchTrendsFilms,
  rejectedFetchFilterFilms,
  rejectedFetchFilmsFavorites,
  rejectedFetchNextPageFilms,
  rejectedFetchFilmId,
];

const dispatchSequenceMiddleware =
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
    } else if (rejectedAll.includes(action.type)) {
      dispatch(statusRejected(action.payload));
      next(action);
    } else if ([fulfilledFetchFilmsMain, fulfilledFetchTrendsFilms].includes(action.type)) {
      dispatch(statusResolved());
      dispatch(resolvedFirstPage(action.payload));
      dispatch(currentPage(2));
      next(action);
    } else if ([fulfilledFetchFilmId].includes(action.type)) {
      dispatch(statusResolved());
      dispatch(getFilmId(action.payload));
      next(action);
    } else if ([fulfilledFetchFilmsFavorites].includes(action.type)) {
      // dispatch(statusResolved());
      // dispatch(addPage(action.payload));
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

export const listenerMiddleware = [dispatchSequenceMiddleware];
