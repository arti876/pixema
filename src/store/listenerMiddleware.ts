const dispatchSequenceMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    return next(action);
  };

export const listenerMiddleware = [dispatchSequenceMiddleware];
