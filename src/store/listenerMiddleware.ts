import { currentPage } from './Slice/filmSlice';

const filmMainType = 'filmMain/fetchFilmMain/fulfilled';
const filmTrendsType = 'filmTrends/fetchFilmTrends/fulfilled';

const dispatchSequenceMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === filmMainType || action.type === filmTrendsType) {
      dispatch(currentPage(2));
      next(action);
    } else {
      return next(action);
    }
  };

export const listenerMiddleware = [dispatchSequenceMiddleware];
