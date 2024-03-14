import { addFilterData, clearDataFilm, currentPage } from './Slice/filmSlice';

const filmMainType = 'filmMain/fetchFilmMain/fulfilled';
const filmTrendsType = 'filmTrends/fetchFilmTrends/fulfilled';
const filmFilterType = 'filter/fetchFilmFilter/fulfilled';

const dispatchSequenceMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === filmMainType || action.type === filmTrendsType) {
      dispatch(currentPage(2));
      next(action);
    } else if (action.type === filmFilterType) {
      console.log(action);
      dispatch(clearDataFilm());
      // dispatch(currentPage(1));
      // dispatch(addFilterData(action.meta.arg));
      next(action);
    } else {
      return next(action);
    }
  };

export const listenerMiddleware = [dispatchSequenceMiddleware];
